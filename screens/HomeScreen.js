import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator , SafeAreaView, ScrollView, FlatList } from 'react-native'
import Article from '../components/Article';
import axios, { Axios } from 'axios';
import { useState } from 'react';
function HomeScreen() {
    const [articles, setArticles] = useState([]);
    const [isLoading , setIsLoading] = useState(true)

    function getNews() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9', {
            params: {
                category: 'technology',
            }, headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                console.log(response.data.articles);
                setIsLoading(false)
                setArticles(response.data.articles)
            })
    }

    useEffect(() => {
        getNews();
    }, [])

    const getContent = () =>{
        if(isLoading){
            return <ActivityIndicator size='large' color='blue' style={{marginTop:50}}/>

        }

        return(
            <FlatList
            data={articles}
            renderItem = {({item}) =>
            <>
                <Article
                    urlToImage = {item.urlToImage}
                    title = {item.title}
                    description = {item.description}
                    author = {item.author}
                    publishedAt = {item.publishedAt}
                    sourceName = {item.source.name}
                    url={item.url}
                />
                <View style={styles.bottomItem}></View>
                </>}
            keyExtractor = {(item) => item.title}
        />
        )
    }
    return (
        <ScrollView style={styles.container}>
         {getContent()}
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bottomItem:{
        width:'90%',
        backgroundColor:'black',
        alignSelf:'center',
        height:1
    }
})