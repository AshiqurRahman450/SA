import { View , Text,TextInput,StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import {Colors} from './../../../constants/Colors'
 
export default function Signin(){
    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    return(
        <View style={{
            padding:25,
            paddingTop:80, 
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}>
            <Text style={{
                fontFamily:'outfit-Bold',
                fontSize:30,
            }}>Let's Sign You In</Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:30,
                color:Colors.BLACK,
                marginTop:20,
            }}>Welcome Back</Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:30,
                color:Colors.BLACK,
                marginTop:10,
            }}>You've Been Missed</Text>

            <View style={{
                marginTop:50,
            }}>
                <Text style={{
                    fontFamily:'outfit'
                }}>Phone Number</Text>  
                <TextInput type='number' style={styles.input} placeholder='Enter Phone Number'/>
            </View>

            <View style={{
                padding:15,
                backgroundColor:Colors.BLACK, 
                borderRadius:15,
                marginTop:30,
            }}>
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center'
                }}>Get OTP</Text>
            </View>

            <View style={{
                marginTop:50,
            }}>
                <Text style={{
                    fontFamily:'outfit'
                }}>OTP</Text>  
                <TextInput type='number' style={styles.input} placeholder='Enter OTP'/>
            </View>

            <View style={{
                padding:15,
                backgroundColor:Colors.BLACK, 
                borderRadius:15,
                marginTop:30,
            }}>
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center'
                }}>Sign In</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
      padding:15,
      borderWidth:1,
      borderRadius:15,
      fontFamily:'outfit'
    }
})