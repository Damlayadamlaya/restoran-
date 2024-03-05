import { StyleSheet, Text, View ,filter} from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import UseResults from '../hooks/UseResults'
import ResultsList from '../components/ResultsList';



export default function SearchScreen() {
  const [searchApi, results,errorMessage] = UseResults();
  const [term, setTerm] = useState('');
  console.log(results);
  
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    })
  }
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <text>{errorMessage}</text> : <>
        {results.length == 0 ? (<></>)
          : ( <>
      <ResultsList title=' ucuz restoranlar' results={filterResultsByPrice('₺')} />
      <ResultsList title=' uygun restoranlar' results={filterResultsByPrice('₺₺')} />
      <ResultsList title=' pahali restoranlar' results={filterResultsByPrice('₺₺₺')} />
          </>)}
      </>}

      
     
    </View>
  );
}

const styles = StyleSheet.create({});