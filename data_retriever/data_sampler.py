import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import warnings

warnings.filterwarnings('ignore')
import matplotlib.pyplot as plt
import matplotlib
# visualisation
matplotlib.style.use('ggplot')

import seaborn as sns

sns.set_style("whitegrid")

def load_df():
    df = pd.read_csv('sample_data.csv', encoding = 'latin')
    return df

def get_features(df):
    for col in df.columns:
        print(col)

def count_features(df):
    count = df.dtypes.value_counts()
    print('This data set contains:')
    c=0
    for i in count.index:
        if i == 'object':
            print('Number of categorical features: ', count[i])
        if i == 'float64':
            c=count[i]
        if i == 'int64':
            c += count[i]
    print('Number of numerical features: ', c)

def get_data(url):
    df = load_df()
    return {}

def category_fields(data):
    # do some categorisation
    get_features(df)
    return dict(numeric=["size", "price"], categorical=["type_of_fruit", "name"])

def gen_x_y_graph(x, y):
    # generate X, Y graph
    return "png_path"

def gen_correlation_graph(selection):
    # generate correlation graph
    return "png_path"