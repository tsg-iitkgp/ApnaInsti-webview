


constructor(props) {
    super(props);
    this.state = {
      
       canGoBack: false
    };
  }
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
}
 handleBackPress = () => {
   if (this.state.canGoBack) {
      this.kgpamica.goBack();
    }
  else{
    this.props.navigation.goBack(null)
    }
  return true;
} 
onNavigationStateChange(navState) {
      this.setState({
      canGoBack: navState.canGoBack
   });
 }
  static navigationOptions = { header: null };
  ActivityIndicatorLoadingView() {
    return (
      <View style={styles.actindi}>
        <ActivityIndicator
          color="#009688"
          size="large"
          style={styles.ActivityIndicatorStyle}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={gstyles.topbar}>
          <TouchableOpacity
            style={{ justifyContent: "center", marginLeft: 5 }}
            onPress={() => {
              EventRegister.emit("toggle", null);
            }}
          >
            <Icon name="menu" size={25} color="#fff" />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginRight: width(1),
                   color: "#ebebeb",
                fontSize: 22,
                fontFamily: "Roboto-Regular"
              }}
            >
              KGPAMICA
            </Text>
          </View>

        
             <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=>{this.kgpamica.reload()}}> 
            <EvilIcons name="refresh" size ={40} color="#fff"/>
          </TouchableOpacity>
        </View>

        <WebView
              source={{ uri: "https://www.kgpamica.com" }}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={this.ActivityIndicatorLoadingView}
              ref={ref => (this.kgpamica = ref)}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)} 
            />
  
      </View>
    );
  } 