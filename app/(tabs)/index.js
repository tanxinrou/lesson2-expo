import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the specific icon set

const Movie = ({ title, year, icon_name, poster }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Image source={poster} style={{ width: 400, height: 500 }} />
            <Text>
                This is the movie {title} - {year}
            </Text>
            <Icon name={icon_name} size={30} color="#B23B23" />
        </View>
    );
};

const MovieInfo = () => {
    return (
        <View>
            <Movie
                title="Doctor Sleep"
                year="2019"
                icon_name="film"
                poster={require('./img/doctor-sleep.jpg')}
            />
            <Movie
                title="Midway"
                year="2020"
                icon_name="heart"
                poster={require('./img/midway.jpg')}
            />
            {/* Add more Movie components as needed */}
        </View>
    );
};

const Index = () => {
    return (
        <ScrollView>
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 24, marginBottom: 16 }}>Movie List</Text>
                <MovieInfo />
            </View>
        </ScrollView>
    );
};

export default Index;
