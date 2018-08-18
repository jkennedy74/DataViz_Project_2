# dependencies
from flask import (
    Flask, 
    jsonify, 
    render_template, 
    redirect)

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session, load_only
from sqlalchemy import create_engine, func
from flask_sqlalchemy import SQLAlchemy

import numpy as np
import pandas as pd

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///../data/animalData.sqlite"
db = SQLAlchemy(app)

# Declare a Base using `automap_base()`
Base = automap_base()

# Use the Base class to reflect the database tables
Base.prepare(db.engine, reflect=True)

# Assign the demographics class to a variable called `Demographics`
Animals = Base.classes.animals

# base route
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

# route for returning all class names
@app.route("/classes")
def classes():
    """Return a list of sample names."""

    # results of the query
    results = db.session.query(Animals.s_class).all()

    # empty list to append data to
    class_names = []

    # loop to append relevant data
    for result in results:
        class_names.append(result[0])

    # return a set of unique values in the list
    class_set = set(class_names)

    # change the set back to a list
    class_names = list(class_set)

    # remove items that are not needed
    class_names.remove("s_class")
    class_names.remove("")
    class_names.remove("Hutter_Madagascar_2016_2016-11-21_12:33")

    # sort the list
    class_names.sort()

    return jsonify(class_names)

# route for returning sample metadata
@app.route("/metadata/<s_class>")
def animal_metedata(s_class):
    """Return the MetaData for a given sample."""

    # Selection to query
    sel = [
        Animals.eventDate, 
        Animals.country,
        Animals.decimalLatitude,
        Animals.decimalLongitude,
        Animals.s_class]

    # results of the query
    results = db.session.query(*sel).filter(Animals.s_class==s_class)

    # empty list to append data to
    metadata = []

    # loop to append relevant data
    for result in results:
        if result[2] != "" and result[3] != "":
            info = {
                "Year": result[0][0:4],
                "Country": result[1],
                "Latitude": result[2],
                "Longitude": result[3],
                "Class": result[4]
            }

            metadata.append(info)

    return jsonify(metadata)

# route for returning sample metadata
@app.route("/year/<s_class>")
def animal_year(s_class):
    """Return the MetaData for a given sample."""

    # Selection to query
    sel = [
        Animals.eventDate]

    # results of the query
    results = db.session.query(*sel).filter(Animals.s_class==s_class)

    # empty list to append data to
    years = []

     # loop to append relevant data
    for result in results:
        years.append(result[0][0:4])

    # return a set of unique values in the list
    year_set = set(years)

    # change the set back to a list
    years = list(year_set)

    # sort the list
    years.sort()

    return jsonify(years)


if __name__ == "__main__":
    app.run(debug=True)

