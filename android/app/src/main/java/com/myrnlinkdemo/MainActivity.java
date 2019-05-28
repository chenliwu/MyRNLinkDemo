package com.myrnlinkdemo;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    private final String TAG = "MainActivity";

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MyRNLinkDemo";
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
    }

    @Override
    protected void onRestart() {
        super.onRestart();

        ///获取隐式启动的携带的参数
        Intent intent = getIntent();
        String scheme = intent.getScheme();
        Uri uri = intent.getData();
        System.out.println("scheme:" + scheme);
        Log.d(TAG, "scheme:" + scheme);
        if (uri != null) {
            String host = uri.getHost();
            String dataString = intent.getDataString();
            String path = uri.getPath();
            String path1 = uri.getEncodedPath();
            String queryString = uri.getQuery();

            Log.d(TAG, "host:" + host);
            Log.d(TAG, "dataString:" + dataString);
            Log.d(TAG, "path:" + path);
            Log.d(TAG, "path1:" + path1);
            Log.d(TAG, "queryString:" + queryString);

            System.out.println("host:" + host);
            System.out.println("dataString:" + dataString);
            System.out.println("path:" + path);
            System.out.println("path1:" + path1);
            System.out.println("queryString:" + queryString);
        }

    }
}
