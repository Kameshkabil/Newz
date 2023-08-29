import React, { useState } from 'react';
import moment from 'moment';
import * as WebBrowser from 'expo-web-browser';
import { View, Text, StyleSheet, SafeAreaView, Image, ActivityIndicator, Pressable, Modal, Button } from 'react-native'
function Article(props) {

    const [isModelVisible, setIsModelVisible] = useState(false)


    return (
        <View>
            <Pressable style={styles.container} onPress={() => {
                setIsModelVisible(true)
            }}>
                {(props.urlToImage == null) ? <ActivityIndicator size='large' color='red' /> : <Image source={{ uri: props.urlToImage }} style={styles.image} />}

                <View style={{ padding: 20 }}>
                    {(props.title == null) ? <ActivityIndicator size='large' color='red' /> : <Text style={styles.title}>{props.title}</Text>}

                    {(props.description == null) ? <ActivityIndicator size='large' color='red' /> : <Text style={styles.description} numberOfLines={3}>{props.description}</Text>}

                    <View style={styles.data}>
                        <Text style={styles.heading}>by: {(props.author == null) ? <ActivityIndicator size='small' color='red' /> : <Text style={styles.author}>{props.author}</Text>}</Text>
                        {(props.publishedAt == null) ? <ActivityIndicator size='small' color='red' /> : <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>}
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text>source: {(props.sourceName == null) ? <ActivityIndicator size='small' color='red' /> : <Text style={styles.source}>{props.sourceName}</Text>}</Text>
                    </View>
                </View>
            </Pressable>

            <Modal visible={isModelVisible} onRequestClose={() => {
                setIsModelVisible(false)
            }}>
                <Pressable style={{ position: 'absolute', top: 20, left: 10, zIndex: 1 }} onPress={() => {
                    setIsModelVisible(false)
                }}>
                    <Image style={[styles.remove]} source={{
                        uri: 'https://img.icons8.com/windows/32/left.png'
                    }} />
                </Pressable>

                {(props.urlToImage == null) ? <ActivityIndicator size='large' color='red' /> : <Image source={{ uri: props.urlToImage }} style={styles.BigScreenimage} />}


                <View style={{ padding: 20 }}>
                    {(props.title == null) ? <ActivityIndicator size='large' color='red' /> : <Text style={styles.bigTitle}>{props.title}</Text>}

                    {(props.description == null) ? <ActivityIndicator size='large' color='red' /> : <Text style={styles.bigDescription} numberOfLines={3}>{props.description}</Text>}

                    <View style={styles.data}>
                        <Text style={styles.heading}>by: {(props.author == null) ? <ActivityIndicator size='small' color='red' /> : <Text style={styles.bigAuthor}>{props.author}</Text>}</Text>
                        {(props.publishedAt == null) ? <ActivityIndicator size='small' color='red' /> : <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>}
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text>source: {(props.sourceName == null) ? <ActivityIndicator size='small' color='red' /> : <Text style={styles.source}>{props.sourceName}</Text>}</Text>
                    </View>
                </View>
            </Modal>


        </View>
    )
}

export default Article;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: '#000',
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: '#fff',
        marginTop: 30
    },
    image: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10
    },
    description: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '400'
    },
    data: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    heading: {},
    author: {
        fontWeight: 'bold',
        fontSize: 15
    },
    date: {
        fontWeight: 'bold',
        color: '#047BD5',
        fontSize: 15
    },
    source: {
        fontWeight: 'bold',
        color: 'royalblue',
        fontSize: 18
    },
    BigScreenimage: {

        width: '100%',
        height: 400,
        alignSelf: 'center'
    },
    bigTitle: {
        fontSize: 22,
        fontWeight: '600'
    },
    bigDescription: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '400'
    },
    bigAuthor: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 18
    },
    remove: {
        width: 30,
        height: 20,
    }

})