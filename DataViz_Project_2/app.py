#!/usr/bin/python
# -*- coding: utf-8 -*-
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = \
    'sqlite:///data/animalData.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# reflect an existing database into a new model

Base = automap_base()

# reflect the tables
Base.prepare(db.engine, reflect=True)
Occurrences = Base.classes.occurrences


@ app.route('/')
def index():
    ""


"Return the homepage."
""

return render_template('index.html')


@ app.route('/occurrences')
def occurrences():
    ""


"Return a list of sample names."
""

#Use Pandas to perform the sql query

query = db.session.query(Occurrences).statement
o_df = pd.read_sql_query(query, db.session.bind)
o_df  # Return a list of the column names(sample names)

return jsonify(list(df.columns)[2:])
