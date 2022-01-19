import React,{useState} from 'react';
import {View,StyleSheet,Text,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';



const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    };


   
    return (
        <View style={styles.viewStyle}>
            <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            <ScrollView>
                <ResultList 
                results={filterResultsByPrice('$')} 
                title="cost Effective"/>

                <ResultList 
                results={filterResultsByPrice('$$')}
                title="Bit Pricier"/>

                <ResultList 
                results={filterResultsByPrice('$$$')}
                title="Big Spender"/>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'white',
        flex:1,
    }
});


export default SearchScreen;