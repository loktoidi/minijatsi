import { StyleSheet } from 'react-native';


export default StyleSheet.create({

  backgroundImage: {
    flex: 1, // Take up the entire screen
    resizeMode: "cover", // or "contain" as per your preference
    justifyContent: "center", // Center the image both vertically and horizontally
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
  },
 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#e7e41b',
    flexDirection: 'row',
    zIndex: 2, // Ensure it's above other components
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#e7e41b',
    flexDirection: 'row',
    zIndex: 2, // Ensure it's above other components
  },

  //frontpage 
  title: {
    color: '#080808',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  placeholderText: {
  color: '#efd80a',
  fontSize: 16,
  },
  welcomeText: {
    fontSize: 25, // Adjust the font size as needed
    fontWeight: "bold", // You can set the font weight
    color: '#efd80a',
    textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    margin: 10,
    marginBottom: 45,
  },
 
  playerNameInput: {
    color: '#e7e41b',
    fontSize: 18,
    borderWidth: 2, // Add border width
    borderColor: '#e7e41b', // Add border color
    borderRadius: 5, // Add border radius for rounded corners
    padding: 10,
    backgroundColor: '#665a5a',
  },
  okButton: {
    width: 100,
    height: 40,
    backgroundColor: '#e7e41b',
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingVertical: 4, // Adjust as needed to vertically center the text
    paddingHorizontal: 34, // Adjust as needed to horizontally center the text
    borderWidth: 2,
    borderColor: '#665a5a',
  },
  buttonText: {
    color: '#080808',
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 24, // Adjust as needed to vertically center the text
  },
  author: {
    color: '#030303',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  
  
  //rules page
  rulesTitle:{
    color: '#e7e41b',
    fontSize: 35,
    textShadowColor: '#070707',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  rulesText:{
    color: '#665a5a',
    margin: 7,
    textShadowColor: '#e7e41b',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontWeight: 'bold',
  },
  emptySpace: {
    height: 16,
     
  },
  goodLuckContainer:{
    backgroundColor: '#e7e41b'
  },

  goodLuckText:{
    color: '#111111',
    fontSize: 21,
    textShadowColor: '#e7e41b',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: "#e7e41b",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#050505",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 15,
    paddingVertical: 10, // Adjust as needed
    paddingHorizontal: 20, // Adjust as needed
  },
  playButtonText: {
    color: "#080808",
    fontSize: 16, // Adjust the font size as needed
    textAlign: "center",
    fontWeight: "bold", // Adjust as needed
  },

  //gameboard
  gameboard: {
    backgroundColor: '#060606',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#060606',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 17,
    marginTop: 10
  },
  playerNameText: {
    fontSize: 20, // Adjust the font size as needed
    fontWeight: "bold", // You can set the font weight
    color: '#efd80a',
    textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 50,
    textAlign: "center",
  },
  throwsLeftText: {
    fontSize: 20, // Adjust the font size as needed
    fontWeight: "bold", // You can set the font weight
    color: '#efd80a',
    textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    margin: 10,
    marginTop: 2,
    marginBottom: 10,
    textAlign: "center",
  },
  row: {
    marginTop: 2,
    padding: 8,
    borderWidth: 3,
    borderColor: '#070707',
    borderRadius: 10,
    backgroundColor: 'rgba(105, 94, 94, 0.7)',
  },
  flex: {
    flexDirection: "row"
  },
  statusTextStyle1: {
    fontSize: 20, // Customize with your desired font size
    fontWeight: 'bold', // Customize with your desired font weight
    color: 'green', // Customize with your desired text color
    // Add any other styles you want to customize
    textAlign: 'center', // Center the text horizontally
  justifyContent: 'center', // Center the text vertically
  alignItems: 'center',
  textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  statusTextStyle2: {
    fontSize: 20, // Customize with your desired font size
    fontWeight: 'bold', // Customize with your desired font weight
    color: 'yellow', // Customize with your desired text color
    textAlign: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center',
    textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  statusTextStyle3: {
    fontSize: 20, // Customize with your desired font size
    fontWeight: 'bold', // Customize with your desired font weight
    color: 'red', // Customize with your desired text color
    textAlign: 'center', // Center the text horizontally
    textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
  },
  button: {
  backgroundColor: "#e7e41b",
  borderRadius: 15,
  borderWidth: 2,
  borderColor: "#665a5a",
  alignSelf: "center",
  justifyContent: "center",
  marginTop: 8,
  marginBottom: 5,
  paddingVertical: 10,
  paddingHorizontal: 15,
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 15,
  },
  button1: {
    backgroundColor: "#e7e41b",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#665a5a",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    },
    buttonText1: {
      color:"#2B2B52",
      fontSize: 12,
    },
  pointsRowText: {
    fontSize: 15,
    color: "#e7e41b",
    marginLeft: 10,
    paddingHorizontal: 3,
    textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
   pointsRow: {
    margin:2,
    paddingRight:5,
  },
  pointsToSelectRow: {
    flexDirection: 'row', // Add this to make it horizontal
    borderWidth: 1,       // Add border width
    borderColor: 'black', // Add border color
    borderRadius: 5,      // Add border radius for rounded corners
    padding: 5, 
    backgroundColor: 'rgba(105, 94, 94, 0.7)',
  },
  totalPointsText:{
    fontSize: 20, // Adjust the font size as needed
    fontWeight: "bold", // You can set the font weight
    color: '#efd80a',
    textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 10,
    textAlign: "center",
  },
  pointsAwayFromBonusText: {
    fontSize: 15,
    color: '#efd80a',
    textAlign: "center",
    textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  //Scoreboard
  scoreboardContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scoreboardHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 7,
    textShadowColor: '#efd80a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  scoreboardEntry: {
    borderBottomWidth: 2,
    borderBottomColor: '#efd80a',
    paddingVertical: 8,
    
  },
  scoreboardPlayerName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#efd80a',
    textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    
  },
  scoreboardTotalPoints: {
    fontSize: 15,
    color: '#efd80a',
    textShadowColor: '#0a0a0a',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  scoreboardDateTime: {
    fontSize: 14,
    color: '#ffffffff',
    fontWeight: 'bold',
  },
  scoreboardAddButton: {
    marginVertical: 16,
  },
 
});

  
