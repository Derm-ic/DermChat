import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ColorSchemeContext } from '../context/useDarkMode'

// Bar at the top of the Server tab that opens the Accounts page.
const AccountsBar = ({ onPress }: { onPress: () => void }): React.JSX.Element => {
  const darkMode = React.useContext(ColorSchemeContext)
  const color = darkMode ? '#ffffff' : '#000000'
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: darkMode ? '#1e1e1e' : '#f2f2f2',
      }}
    >
      <MaterialIcons name='switch-account' size={22} color={color} />
      <Text style={{ flex: 1, marginLeft: 10, fontWeight: 'bold', color }}>Accounts</Text>
      <Ionicons name='chevron-forward' size={20} color={color} />
    </TouchableOpacity>
  )
}

export default AccountsBar
