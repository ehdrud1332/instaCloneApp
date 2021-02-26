import React, {Component} from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Layout, Avatar, withStyles, List } from '@ui-kitten/components';
import {Colors} from '../Colors';

const DATA = [
    {
        id: 1,
        postTitle: 'Planet of Nature',
        avatarURI:
            'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        imageURI:
            'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        randomText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        id: 2,
        postTitle: 'Lampost',
        avatarURI:
            'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        imageURI:
            'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        randomText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
]


class Feed extends Component {



    render() {

        const renderItem = ({item}) => (
            <View style={styles.card}>
                <Image
                    source={{uri: item.imageURI}}
                    style={styles.cardImage}
                />
                <View style={styles.cardHeader}>
                    <Text category='s1' style={styles.cardTitle}>
                        {item.postTitle}
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Profile")}
                    >
                        <Avatar
                            source={{ uri: item.avatarURI}}
                            size='small'
                            style={styles.cardAvatar}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <Text category='p2'>{item.randomText}</Text>
                </View>
            </View>
        )

        return (
            <List
                style={styles.container}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={DATA.id}
            />
        )
    }
}

export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        backgroundColor: Colors["100"],
        marginBottom: 25
    },
    cardImage: {
        width: '100%',
        height: 300
    },
    cardHeader: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardTitle: {
        color: Colors["color-basic-1000"]
    },
    cardAvatar: {
        marginRight: 16
    },
    cardContent: {
        padding: 10,
        borderWidth: 0.25,
        borderColor: Colors["color-basic-600"]
    }
})