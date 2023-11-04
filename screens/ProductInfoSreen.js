import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HeaderBack from "../components/HeaderBack";
import { useDispatch, useSelector } from "react-redux";
import { addProdToCart } from "../features/orders/orderSlice";

const ProductInfoScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  console.log(route.params.item);
  const [addedToCart, setAddedToCart] = useState(false);
  const singleProductState = useSelector(
    (state) => state?.products?.singleProduct?.data?.data
  );
  const cartState = useSelector((state) => state?.orders?.userCart);
  const addItemToCart = (item) => {
    dispatch(
      addProdToCart({
        productId: singleProductState?._id,
        color: singleProductState?._id?.color,
        price: singleProductState?.price * quantity,
        quantity: quantity,
      })
    );
  };
  useEffect(() => {
    for (let i = 0; i < cartState?.length; i++) {
      if (singleProductState?._id === cartState[i]?.productId?._id) {
        setAddedToCart(true);
      }
    }
  }, []);
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <HeaderBack navigate={"Home"} title={"Product"} />

      <View
        style={{
          width: "100%",
          height: "350px",
          marginBottom: 50,
          alignItems: "center",
        }}
      >
        {route.params.item.image.map((item, index) => (
          <ImageBackground
            style={{
              width: "80%",
              height: "100%",
              marginTop: 25,
              resizeMode: "contain",
            }}
            source={{ uri: item.url }}
            key={index}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#C60C30",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  20% off
                </Text>
              </View>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color="black"
                />
              </View>
            </View>

            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: "auto",
                marginLeft: 20,
                marginBottom: 20,
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          {route?.params?.item?.title}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 6 }}>
          ₹{route?.params?.item?.price}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Color: </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params?.item?.color}
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Size: </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params?.size}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 5 }}>
          Total : ₹{route.params?.item?.price}
        </Text>
        <Text style={{ color: "#00CED1" }}>
          FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="location" size={24} color="black" />

          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Deliver To Sujan - Bangalore 560019
          </Text>
        </View>
      </View>

      <Text style={{ color: "green", marginHorizontal: 10, fontWeight: "500" }}>
        IN Stock
      </Text>

      <Pressable
        onPress={() => addItemToCart(route?.params?.item)}
        style={{
          backgroundColor: "#FFC72C",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        {addedToCart ? (
          <View>
            <Text>Added to Cart</Text>
          </View>
        ) : (
          <Text>Add to Cart</Text>
        )}
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#FFAC1C",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Text>Buy Now</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});
