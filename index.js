import './js/bootstrap.min.js';
import { ModelContainer, configContainer} from './js/TailoriUiAppend.js';
// import './css/media.css' with {type:'css'};
// import './css/slide.css' with {type:'css'};
// import './css/theme.css' with {type:'css'};
import { configurationUi } from './js/Utils.js';
import { getDataFromUrl } from './js/plugin.js';

window.tailoriPlugin = function(options) {
    
    function init(options){
        if($('#tds') != undefined){
            $('#tds').empty().append(ModelContainer);
            $('#tds').append(configContainer);
            configurationUi(options);
            getDataFromUrl(options);
        } else {
            // createAnNewDev("tds");
            // $('#tds').empty().append(ModelContainer);
            // $('#tds').append(configContainer);
            // configurationUi(options);
            alert('create an div');
        }
    }
   

    init(options);
    return "methods";

}

export default tailoriPlugin;