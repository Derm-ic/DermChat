import React, { useEffect, useRef } from 'react'
import { ActivityIndicator, BackHandler, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import WebView from 'react-native-webview'

// A full website inside a tab. Android's back button goes back in the page first.
const WebScreen = ({ url }: { url: string }): React.JSX.Element => {
  const ref = useRef<React.ElementRef<typeof WebView>>(null)
  const canGoBack = useRef(false)
  const focused = useIsFocused()

  useEffect(() => {
    if (!focused) return
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (canGoBack.current) {
        ref.current?.goBack()
        return true
      }
      return false
    })
    return () => sub.remove()
  }, [focused])

  return (
    <WebView
      ref={ref}
      source={{ uri: url }}
      javaScriptEnabled
      domStorageEnabled
      sharedCookiesEnabled
      startInLoadingState
      renderLoading={() => (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )}
      onNavigationStateChange={state => {
        canGoBack.current = state.canGoBack
      }}
    />
  )
}

export default WebScreen
