import {
    Platform
} from 'react-native';
import {
    request,
    PERMISSIONS,
    RESULTS
} from 'react-native-permissions';


export default class StoragePermission{

    constructor(){
        this.os = Platform.OS
        this.storagePermission = this.os === 'android' ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE : '';
    }

    handleStoragePermission(){
        return new Promise((resolve, reject) => {
            if (this.os === 'android') {
                request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
                .then(async (result) => {
                    await this._switchRequestResult(result)
                    .then((permissionIsGranted) => resolve(permissionIsGranted));
                })
                .catch((error) => reject(error));
            } else {
                resolve(true);
            }
        });
    };

    _switchRequestResult = (result) => {
        return new Promise((resolve, reject) => {
            switch(result){
                case RESULTS.UNAVAILABLE:
                    resolve(false);
                    break;
                case RESULTS.DENIED:
                    resolve(false);
                    break;
                case RESULTS.GRANTED:
                    resolve(true)
                    break;
                case RESULTS.BLOCKED:
                    resolve(true)
                    break;
            }
        });
    };
};
