import React,{useState} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [results,setResults] = useState([]);
    
    return (
        <View style={styles.viewStyle}>
            <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => console.log('term was submitted')}
            />
            <Text>Search Screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'white',
    }
});


export default SearchScreen;