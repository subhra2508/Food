### React Navigation Library :

- It provides threee types of navigation
    - Drawer Navigator => open up a menu and when we click on a link it will navigate to that page
    - BottomTabNavigator => the instagram below there are some options like reels,profile
    - StackNavigator => simple just attached a link into a screen and it will automatically create a back bottom for the users

### few props that we can use in <TextInput/>
autoCorrect={false}
onEndEditing={onTermSubmit} 

### Making an Network Request :
- There are basically two ways to make an network request : fetch , axios

### fetch 
- Built in function for making network requests
- Error handling is a bit weird
- Requires us to write a lot of wrapper code to making reequest

### axios 
- separate library for making requests
- Easy to use,sensible defaults
- Increase our app size (very,very slightly)