import { LightningElement } from 'lwc';
import MYLOGO from "@salesforce/resourceUrl/myImg";

import SHOWLABEL from "@salesforce/label/c.Show_in_Prod";
import USER_ID from "@salesforce/user/Id";
import FORMFACTOR from "@salesforce/client/formFactor";
import LOCALE from "@salesforce/i18n/locale";
import CURRENCY from "@salesforce/i18n/currency";
import LANG from "@salesforce/i18n/lang";


export default class ImportUtility extends LightningElement {


    myNewLogo = MYLOGO;

    label = SHOWLABEL;

    userId = USER_ID;

    formFactor = FORMFACTOR;
    locale = LOCALE;
    currency = CURRENCY;
    lang = LANG;

    ShowInProd(){
        return label == "true" ? true : false;
    }
}