
#!/usr/bin/env bash

source bin/.profilerc;
source bin/_utils.sh;



#try
(
    if [[ $(isJavaInstalled;) == "false" ]]; then exit 1; fi
    if [[ $(isAndroidInstalled;) == "false" ]]; then exit 2; fi
    if [[ $(isNodeInstalled;) == "false" ]]; then exit 3; fi
    if [[ $(isNodeVersion;) == "false" ]]; then exit 31; fi
    if [[ $(isNpmInstalled;) == "false" ]]; then exit 4; fi

    npm remove -g nativescript;
    npm cache clean;
    npm install -g nativescript;

    exit 0;

)
#catch
_rc=$?;
case ${_rc} in
    0)  echo "";
        ;;
    1)  echo "Java is not installed or configured properly";
        ;;
    2)  echo "Android is not installed or configured properly";
        ;;
    3)  echo "Node is not installed or configured properly";
        ;;
    31) echo "Node version ${__NODE_VERSION__} is not installed";
        ;;
    4)  echo "Npm is not installed or configured properly";
        ;;
    5)  echo "NativeScript is not installed or configured properly";
        ;;
    *)  echo "fubar! Something went wrong.";
        ;;
esac
#finally
exit ${_rc};
