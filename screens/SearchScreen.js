import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchScreen = () => {
  return (
    <View>
      <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  onChange={(selected) => {
                    navigate(`/product/${selected[0]?.prod}`);
                  }}
                  options={productOpt}
                  paginate={paginate}
                  labelKey={"name"}
                  minLength={2}
                  placeholder="Search for Product here..."
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})