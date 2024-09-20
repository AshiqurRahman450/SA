import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function Login() {
    const router=useRouter();
  return (
    <View  style={styles.width}>
      <Image
        source={require('./../assets/images/village.png')}
        style={{
          width: '100',
          height: 800,
        }}
      />
      <View style={styles.container}>
        <Text style={{
            fontSize:28,
            textAlign:'center',
            width:'100%',
            fontVariant:'bold',
            margintop:20,


        }}>Village Complaint Portal</Text>

        <Text style={styles.longpromot}>A village complaint portal is an online platform where residents can submit and track complaints or grievances related to village services and infrastructure.</Text>
        
        <TouchableOpacity style={styles.button}
          onPress={()=>router.push('auth/sign-in')}
        >
            
        <Text style={{
            color:"#fff",
            textAlign:'center',
            fontsize:17,
        }}>Sign In To Phone Number</Text>
      </TouchableOpacity>
      </View>

     

    </View>

    
  );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        marginTop:-20,
        height:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:25,
    },
      
    longpromot:{
        fontSize:17,
        textAlign:'center',
      
        marginTop:40,


    },
    button:{
        backgroundColor:'black',
        padding:15,
        borderRadius:99,
        marginTop:'15%'


    }
      
})