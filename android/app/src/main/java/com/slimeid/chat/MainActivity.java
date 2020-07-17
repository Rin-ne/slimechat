package com.slimeid.chat;

import android.os.Bundle;
import android.util.Log;

import android.content.Context;
import org.json.JSONException;
import org.json.JSONObject;
import androidx.annotation.Nullable;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import expo.modules.splashscreen.SplashScreen;
import expo.modules.splashscreen.SplashScreenImageResizeMode;

public class MainActivity extends ReactActivity {
  private static final String TAG = "SlimeChat";
  private static Context mContext;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // SplashScreen.show(...) has to be called after super.onCreate(...)
    // Below line is handled by '@expo/configure-splash-screen' command and it's discouraged to modify it manually
    SplashScreen.show(this, SplashScreenImageResizeMode.CONTAIN, ReactRootView.class);
    mContext = getApplicationContext();
    JSONObject consentObject = new JSONObject();
    try {
      consentObject.put("gdpr", "0");
    } 
    catch (JSONException e) {
      e.printStackTrace();
    }
    

  }
    public static Context getContext() {
        return mContext;
    }
    public static void init(String placementID){
       
    }
 
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "main";
    }
    
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
}
