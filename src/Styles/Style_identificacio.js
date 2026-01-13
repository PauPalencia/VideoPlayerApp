import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7f7',
    alignItems: 'center',
    justifyContent: 'flex-start', // col·loca el contingut cap amunt
    paddingTop: 90, // distància des de la part superior
  },
  logo: {
    width: 380,
    height: 400,
    marginBottom: -40,
  },
  button: {
    backgroundColor: '#1D5128',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  
});
