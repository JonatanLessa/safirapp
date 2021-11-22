 
 
 
 
 
 
 //funcão para retornar data 
 /*
    const getCurrenteDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        return date + '-' + month + '-' + year;
    }
    */
    /*
    function LoginScreen() {

        const navigation = useNavigation();
            
        return (
            <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#171d31" barStyle="light-content"/> 
          
                <View style={styles.container}>
                  <Text style={styles.textTitle}>FAZENDA PARAISO</Text>
                  <Button title= "INICIO" onPress={()=>{navigation.navigate('Home')}}></Button>   
                </View>   
          
              </SafeAreaView>
        );
    }

    function HomeScreen() {
        const name = 'Evanilson';
      
        const greetings = () => {
          return `Olá ${name}!`;
        }
      //<ButtonState></ButtonState>
        return (
          <View style={styles.container}>
            <Text>{greetings()}</Text>
            <Text>REGISTRE AQUI O SEU PONTO</Text>
            <AppButton></AppButton>
            <ButtonState></ButtonState>
            <ButtonRegistryHour></ButtonRegistryHour>
            <StatusBar style="auto" />            
            <Animais></Animais>            
          </View>      
          );
      }
      */
      /*
      export default function App() {
        //
          return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
          )  
        }
        */
/*
       
export default function LoginScreen(){

  const navigation = useNavigation();
          
  return (
      <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="#171d31" barStyle="light-content"/> 
          <View style={styles.container}>
              <Text style={styles.textTitle}>FAZENDA PARAISO</Text>
              <Button title= "INICIO" onPress={()=>{navigation.navigate('HomeScreen')}}></Button>   
          </View>   
      </SafeAreaView>
  );  
}*/
/*
const ButtonRegistryHour = ()=> {

    const [entryTime, setEntryTime] =  useState(0);
    const [exitTime, setExitTime] = useState(0);
   //Dois exemplos de uso de button, Button e TouchableOpacity
   //<TouchableOpacity style={styles.buttonStyle} onPress={()=>{setEntryTime(new Date().toLocaleString())}}>
    return (
        <View style={styles.viewCheck}>            
            <View style={styles.buttonCheck}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{setEntryTime(moment().format('DD-MM-YYYY hh:mm:ss a'))}}>
                    <Text> HORÁRIO INICIAL </Text>
                </TouchableOpacity>
                <Text style={styles.textCheck}>{entryTime}</Text>
                <RegistryHour></RegistryHour>
            </View>
            <View style={styles.buttonCheck}>
                <Button style={styles.button} title="HORÁRIO FINAL" onPress={()=>{setExitTime(new Date().toLocaleString())}}></Button>
                <Text style={styles.textCheck}>{exitTime}</Text>
            </View>         
            <StatusBar style= "auto" />
        </View>
    );
}
*/