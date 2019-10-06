import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, AsyncStorage, Image, StyleSheet } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List(){
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storedTechs => {
            const techsArray = storedTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        });
    },[]);
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo}/>
            { techs.map(tech =>  
                <ScrollView>
                     <SpotList key={tech} tech={tech} />
                </ScrollView>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: "contain", //quero que o conteudo na imagem fique no espaço disponivel
        alignSelf: "center",
        marginTop: 30,
    }
});