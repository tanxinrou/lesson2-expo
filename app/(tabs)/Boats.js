import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the specific icon set

const Boat = ({ title, text, icon_name, poster }) => {
    return (
        <View style={styles.boatContainer}>
            <View style={styles.titleContainer}>
                <Icon name={icon_name} size={30} style={styles.icon} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.description}>{text}</Text>
            <Image source={poster} style={styles.image} />
            <View style={styles.textContainer}></View>
        </View>
    );
};

const BoatInfo = () => {
    return (
        <View>
            <Boat
                poster={require('./img/sea_ray.jpg')}
                title="Sea Ray 500 Sundancer"
                text="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                icon_name="ship"
            />
            <Boat
                poster={require('./img/four_winns.jpg')}
                title="Four Winns Horizon 180"
                text="A sporty look and refined details truly set the Horizon 180 above all others."
                icon_name="ship"
            />
            <Boat
                poster={require('./img/flipper.jpg')}
                title="Flipper 640 ST"
                text="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                icon_name="ship"
            />
            <Boat
                poster={require('./img/princess.jpg')}
                title="Princess V48"
                text="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                icon_name="ship"
            />
            <Boat
                poster={require('./img/bayliner.jpg')}
                title="Bayliner 175 Bowrider"
                text="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                icon_name="ship"
            />
            <Boat
                poster={require('./img/fairline.jpg')}
                title="Fairline Targa 47"
                text="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                icon_name="ship"
            />
        </View>
    );
};

const Boats = () => {
    return (
        <ScrollView>
            <View style={{ padding: 16 }}>
                <Text style={styles.pageTitle}>GETABOAT - FOR SALE</Text>
                <BoatInfo />
            </View>
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    boatContainer: {
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor:'whitesmoke',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#555555',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
        flex: 1,
    },
    icon: {
        color: 'white',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 8,
        marginVertical: 10,
    },
    description: {
        fontSize: 18,
        color: '#333333',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,

    },
    pageTitle: {
        fontSize: 20,
        backgroundColor: 'gray',
        textAlign: 'center',
        paddingVertical: 10,
        marginBottom: 20,
        color: 'white',
        borderRadius: 5,
    },
});

export default Boats;
