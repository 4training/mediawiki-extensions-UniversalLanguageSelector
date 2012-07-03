( function ( $ ) {
	$.uls = {};
	$.uls.data = {"languages":{"aa":["Latn",["AF"]],"ab":["Cyrl",["EU"]],"ace":["Latn",["AS","PA"]],"ady-cyrl":["Cyrl",["EU"]],"ady-latn":["Latn",["EU"]],"ady":["Cyrl",["EU"]],"aeb":["Arab",["AF"]],"af":["Latn",["AF"]],"ahr":["Deva",["AS"]],"ak":["Latn",["AF"]],"akz":["Latn",["NA"]],"aln":["Latn",["EU"]],"am":["Ethi",["AF"]],"an":["Latn",["EU"]],"ang":["Latn",["EU"]],"anp":["Deva",["AS"]],"ar":["Arab",["ME"]],"arc":["Syrc",["ME"]],"arn":["Latn",["SA"]],"aro":["Latn",["LA"]],"arq":["Latn",["AF"]],"ary":["Latn",["ME"]],"arz":["Arab",["ME"]],"as":["Beng",["AS"]],"ase":["Sgnw",["NA"]],"ast":["Latn",["EU"]],"av":["Cyrl",["EU"]],"avk":["Latn",["WW"]],"ay":["Latn",["SA"]],"az":["Latn",["EU","ME"]],"ba":["Cyrl",["EU"]],"bar":["Latn",["EU"]],"bbc-latn":["Latn",["AS"]],"bbc":["Batk",["AS"]],"bcc":["Arab",["AS","ME"]],"bcl":["Latn",["AS"]],"be-tarask":["Cyrl",["EU"]],"be-x-old":["Cyrl",["EU"]],"be":["Cyrl",["EU"]],"bew":["Latn",["AS"]],"bfq":["Taml",["AS"]],"bg":["Cyrl",["EU"]],"bh":["Deva",["AS"]],"bho":["Deva",["AS"]],"bi":["Latn",["PA"]],"bjn":["Latn",["AS"]],"bm":["Latn",["AF"]],"bn":["Beng",["AS"]],"bo":["Tibt",["AS"]],"bpy":["Beng",["AS"]],"bqi":["Arab",["ME"]],"br":["Latn",["EU"]],"brh":["Latn",["ME","AS"]],"bs":["Latn",["EU"]],"bto":["Latn",["AS"]],"bug":["Bugi",["AS"]],"bxr":["Cyrl",["AS"]],"ca":["Latn",["EU"]],"cbk-zam":["Latn",["AS"]],"cdo":["Latn",["AS"]],"ce":["Cyrl",["EU"]],"ceb":["Latn",["AS"]],"ch":["Latn",["PA"]],"cho":["Latn",["NA"]],"chr":["Cher",["NA"]],"chy":["Latn",["NA"]],"ckb":["Arab",["ME"]],"co":["Latn",["EU"]],"cps":["Latn",["AS"]],"cr":["Cans",["NA"]],"crh-cyrl":["Cyrl",["EU"]],"crh-latn":["Latn",["EU"]],"crh":["Latn",["EU"]],"cs":["Latn",["EU"]],"csb":["Latn",["EU"]],"cu":["Cyrl",["EU"]],"cv":["Cyrl",["EU"]],"cy":["Latn",["EU"]],"da":["Latn",["EU"]],"de-at":["Latn",["EU"]],"de-ch":["Latn",["EU"]],"de-formal":["Latn",["EU"]],"de":["Latn",["EU"]],"diq":["Latn",["EU","AS"]],"dsb":["Latn",["EU"]],"dtp":["Latn",["AS"]],"dv":["Thaa",["AS"]],"dz":["Tibt",["AS"]],"ee":["Latn",["AF"]],"egl":["Latn",["EU"]],"el":["Grek",["EU"]],"eml":["Latn",["EU"]],"en-ca":["Latn",["NA"]],"en-gb":["Latn",["EU","AS","AU"]],"en":["Latn",["EU","NA","AU","AF","ME","AS","PA","WW"]],"eo":["Latn",["WW"]],"es-419":["Latn",["LA"]],"es-formal":["Latn",["EU","NA","LA","SA","AF","WW"]],"es":["Latn",["EU","NA","LA","SA","AF","WW"]],"esu":["Latn",["NA"]],"et":["Latn",["EU"]],"eu":["Latn",["EU"]],"ext":["Latn",["EU"]],"fa":["Arab",["ME"]],"ff":["Latn",["AF"]],"fi":["Latn",["EU"]],"fit":["Latn",["EU"]],"fj":["Latn",["PA"]],"fo":["Latn",["EU"]],"fr":["Latn",["EU"]],"frc":["Latn",["EU"]],"frp":["Latn",["EU"]],"frr":["Latn",["EU"]],"fur":["Latn",["EU"]],"fy":["Latn",["EU"]],"ga":["Latn",["EU"]],"gag":["Latn",["EU"]],"gah":["Latn",["AS"]],"gan-hans":["Hans",["AS"]],"gan-hant":["Hant",["AS"]],"gan":["Hant",["AS"]],"gbz":["Latn",["AS"]],"gcf":["Latn",["LA"]],"gd":["Latn",["EU"]],"gl":["Latn",["EU"]],"glk":["Arab",["ME"]],"gn":["Latn",["LA"]],"gom-deva":["Deva",["AS"]],"gom-latn":["Latn",["AS"]],"gom":["Deva",["AS"]],"got":["Goth",["EU"]],"grc":["Grek",["EU"]],"gsw":["Latn",["EU"]],"gu":["Gujr",["AS"]],"guc":["Latn",["LA"]],"gur":["Latn",["AF"]],"gv":["Latn",["EU"]],"ha":["Latn",["AF"]],"hak":["Latn",["AS"]],"haw":["Latn",["NA","PA"]],"he":["Hebr",["ME"]],"hi":["Deva",["AS"]],"hif-deva":["Deva",["AS"]],"hif-latn":["Latn",["PA","AU","AS"]],"hif":["Latn",["PA","AU","AS"]],"hil":["Latn",["AS"]],"hne":["Deva",["AS"]],"ho":["Latn",["PA"]],"hr":["Latn",["EU"]],"hsb":["Latn",["EU"]],"hsn":["Hans",["AS"]],"ht":["Latn",["NA"]],"hu-formal":["Latn",["EU"]],"hu":["Latn",["EU"]],"hy":["Armn",["EU","ME"]],"hz":["Latn",["AF"]],"ia":["Latn",["WW"]],"id":["Latn",["AS"]],"ie":["Latn",["WW"]],"ig":["Latn",["AF"]],"ii":["Yiii",["AS"]],"ik":["Latn",["NA"]],"ike-cans":["Cans",["NA"]],"ike-latn":["Latn",["NA"]],"ike":["Latn",["NA"]],"ilo":["Latn",["AS"]],"inh":["Cyrl",["EU"]],"io":["Latn",["WW"]],"is":["Latn",["EU"]],"it":["Latn",["EU"]],"iu":["Cans",["NA"]],"ja":["Jpan",["AS"]],"jam":["Latn",["NA"]],"jbo":["Latn",["WW"]],"jut":["Latn",["EU"]],"jv":["Latn",["AS","PA"]],"ka":["Geor",["EU"]],"kaa":["Latn",["AS"]],"kab":["Latn",["AF","EU"]],"kbd-cyrl":["Cyrl",["EU","ME"]],"kbd-latn":["Latn",["EU"]],"kbd":["Cyrl",["EU","ME"]],"kea":["Latn",["AF"]],"kg":["Latn",["AF"]],"kgp":["Latn",["LA"]],"khw":["Arab",["ME","AS"]],"ki":["Latn",["AF"]],"kiu":["Latn",["EU","ME"]],"kj":["Latn",["AF"]],"kk-arab":["Arab",["EU","AS"]],"kk-cn":["Arab",["EU","AS","ME"]],"kk-cyrl":["Cyrl",["EU","AS"]],"kk-kz":["Cyrl",["EU","AS"]],"kk-latn":["Latn",["EU","AS","ME"]],"kk-tr":["Latn",["EU","AS","ME"]],"kk":["Cyrl",["EU","AS"]],"kl":["Latn",["NA","EU"]],"km":["Khmr",["AS"]],"kn":["Knda",["AS"]],"ko-kp":["Kore",["AS"]],"ko":["Kore",["AS"]],"koi":["Cyrl",["EU"]],"kr":["Latn",["AF"]],"krc":["Cyrl",["EU"]],"kri":["Latn",["AF"]],"krj":["Latn",["ME","EU"]],"krl":["Latn",["EU"]],"ks-arab":["Arab",["AS"]],"ks-deva":["Deva",["AS"]],"ks":["Arab",["AS"]],"ksf":["Latn",["AF"]],"ksh":["Latn",["EU"]],"ku-arab":["Arab",["EU","ME"]],"ku-latn":["Latn",["EU","ME"]],"ku":["Latn",["EU","ME"]],"kv":["Cyrl",["EU"]],"kw":["Latn",["EU"]],"ky":["Cyrl",["AS"]],"la":["Latn",["EU"]],"lad":["Latn",["ME","EU","LA"]],"lb":["Latn",["EU"]],"lbe":["Cyrl",["EU"]],"lez":["Cyrl",["EU"]],"lfn":["Latn",["WW"]],"lg":["Latn",["AF"]],"li":["Latn",["EU"]],"lij":["Latn",["EU"]],"liv":["Latn",["EU"]],"lld":["Latn",["EU"]],"lmo":["Latn",["EU"]],"ln":["Latn",["AF"]],"lo":["Laoo",["AS"]],"loz":["Latn",["AF"]],"lt":["Latn",["EU"]],"ltg":["Latn",["EU"]],"lus":["Latn",["AS"]],"lv":["Latn",["EU"]],"lzh":["Hant",["AS"]],"lzz":["Latn",["EU","ME"]],"mai":["Deva",["AS"]],"map-bms":["Latn",["AS"]],"mdf":["Cyrl",["EU"]],"mfe":["Latn",["LA"]],"mg":["Latn",["AF"]],"mh":["Latn",["PA"]],"mhr":["Cyrl",["EU"]],"mi":["Latn",["PA","AU"]],"mic":["Latn",["NA"]],"min":["Latn",["AS"]],"mk":["Cyrl",["EU"]],"ml":["Mlym",["AS","ME"]],"mn":["Cyrl",["AS"]],"mnc":["Mong",["AS"]],"mni":["Beng",["AS"]],"mnw":["Mymr",["AS"]],"mo":["Cyrl",["EU"]],"mr":["Deva",["AS","ME"]],"mrj":["Cyrl",["EU"]],"ms":["Latn",["AS"]],"mt":["Latn",["EU"]],"mui":["Latn",["AS"]],"mus":["Latn",["NA"]],"mwl":["Latn",["EU"]],"mwv":["Latn",["AS"]],"my":["Mymr",["AS"]],"myv":["Cyrl",["EU"]],"mzn":["Arab",["ME","AS"]],"na":["Latn",["PA","AU"]],"nah":["Latn",["NA","LA"]],"nan":["Latn",["AS"]],"nap":["Latn",["EU"]],"nb":["Latn",["EU"]],"nds-nl":["Latn",["EU"]],"nds":["Latn",["EU"]],"ne":["Deva",["AS"]],"new":["Deva",["AS"]],"ng":["Latn",["AF"]],"niu":["Latn",["PA"]],"njo":["Latn",["AS"]],"nl-informal":["Latn",["EU","SA"]],"nl":["Latn",["EU","SA"]],"nn":["Latn",["EU"]],"no":["Latn",["EU"]],"nov":["Latn",["WW"]],"nqo":["Nkoo",["AF"]],"nrm":["Latn",["EU"]],"nso":["Latn",["AF"]],"nv":["Latn",["NA"]],"ny":["Latn",["AF"]],"oc":["Latn",["EU"]],"om":["Latn",["AF"]],"or":["Orya",["AS"]],"os":["Cyrl",["EU"]],"pa":["Guru",["AS"]],"pag":["Latn",["AS"]],"pam":["Latn",["AS"]],"pap":["Latn",["LA"]],"pcd":["Latn",["EU"]],"pdc":["Latn",["EU","NA","SA"]],"pdt":["Latn",["EU","NA","SA"]],"pfl":["Latn",["EU"]],"pi":["Deva",["AS"]],"pih":["Latn",["PA"]],"pis":["Latn",["PA"]],"pko":["Latn",["AF"]],"pl":["Latn",["EU"]],"pms":["Latn",["EU"]],"pnb":["Arab",["AS","ME"]],"pnt":["Grek",["EU"]],"ppl":["Latn",["LA"]],"prg":["Latn",["EU"]],"pru":["Latn",["EU"]],"ps":["Arab",["AS","ME"]],"pt-br":["Latn",["SA","LA"]],"pt":["Latn",["EU","LA","AS","PA","AF"]],"qu":["Latn",["SA"]],"qug":["Latn",["SA"]],"rap":["Latn",["LA"]],"rgn":["Latn",["EU"]],"rif":["Latn",["AF"]],"rki":["Mymr",["AS"]],"rm":["Latn",["EU"]],"rmy":["Latn",["EU"]],"rn":["Latn",["AF"]],"ro":["Latn",["EU"]],"roa-rup":["Latn",["EU"]],"roa-tara":["Latn",["EU"]],"rtm":["Latn",["PA"]],"ru":["Cyrl",["EU","AS","ME"]],"rue":["Cyrl",["EU"]],"rup":["Latn",["EU"]],"ruq":["Latn",["EU"]],"ruq-cyrl":["Cyrl",["EU"]],"ruq-grek":["Grek",["EU"]],"ruq-latn":["Latn",["EU"]],"rw":["Latn",["AF"]],"ryu":["Kana",["AS"]],"sa":["Deva",["AS"]],"sah":["Cyrl",["EU","AS"]],"sat":["Latn",["AS"]],"saz":["Saur",["AS"]],"sc":["Latn",["EU"]],"scn":["Latn",["EU"]],"sco":["Latn",["EU"]],"sd":["Arab",["AS"]],"sdc":["Latn",["EU"]],"se":["Latn",["EU"]],"sei":["Latn",["NA","LA"]],"sg":["Latn",["AF"]],"sgs":["Latn",["EU"]],"sh":["Latn",["EU"]],"shi-latn":["Latn",["AF"]],"shi-tfng":["Tfng",["AF"]],"shi":["Latn",["AF"]],"shn":["Mymr",["AS"]],"si":["Sinh",["AS"]],"simple":["Latn",["WW"]],"sk":["Latn",["EU"]],"sl":["Latn",["EU"]],"sli":["Latn",["EU"]],"slr":["Latn",["AS"]],"sly":["Latn",["AS"]],"sm":["Latn",["PA"]],"sma":["Latn",["EU"]],"sn":["Latn",["AF"]],"so":["Latn",["AF"]],"sq":["Latn",["EU"]],"sr-ec":["Cyrl",["EU"]],"sr-el":["Latn",["EU"]],"sr":["Cyrl",["EU"]],"srn":["Latn",["SA","NA","EU"]],"ss":["Latn",["AF"]],"st":["Latn",["AF"]],"stq":["Latn",["EU"]],"su":["Latn",["AS"]],"sv":["Latn",["EU"]],"sw":["Latn",["AF"]],"swb":["Latn",["AF"]],"sxu":["Latn",["EU"]],"szl":["Latn",["EU"]],"ta":["Taml",["AS"]],"tcy":["Knda",["AS"]],"te":["Telu",["AS"]],"tet":["Latn",["AS","PA"]],"tg-cyrl":["Cyrl",["AS"]],"tg-latn":["Latn",["AS"]],"tg":["Cyrl",["AS"]],"th":["Thai",["AS"]],"ti":["Ethi",["AF"]],"tk":["Latn",["AS"]],"tkr":["Cyrl",["AS"]],"tl":["Latn",["AS"]],"tly":["Cyrl",["EU","AS","ME"]],"tn":["Latn",["AF"]],"to":["Latn",["PA"]],"tokipona":["Latn",["WW"]],"tpi":["Latn",["PA","AS"]],"tr":["Latn",["EU","ME"]],"trp":["Latn",["AS"]],"tru":["Latn",["AS"]],"ts":["Latn",["AF"]],"tsd":["Grek",["EU"]],"tt-cyrl":["Cyrl",["EU"]],"tt-latn":["Latn",["EU"]],"tt":["Cyrl",["EU"]],"ttt":["Cyrl",["AS"]],"tum":["Latn",["AF"]],"tw":["Latn",["AF"]],"twd":["Latn",["EU"]],"ty":["Latn",["PA"]],"tyv":["Cyrl",["AS"]],"tzm":["Tfng",["AF"]],"udm":["Cyrl",["EU"]],"ug-arab":["Arab",["AS"]],"ug-latn":["Latn",["AS"]],"ug":["Arab",["AS"]],"uk":["Cyrl",["EU"]],"ur":["Arab",["AS","ME"]],"uz":["Latn",["AS"]],"ve":["Latn",["AF"]],"vec":["Latn",["EU"]],"vep":["Latn",["EU"]],"vi":["Latn",["AS"]],"vls":["Latn",["EU"]],"vmf":["Latn",["EU"]],"vo":["Latn",["WW"]],"vot":["Latn",["EU"]],"vro":["Latn",["EU"]],"wa":["Latn",["EU"]],"war":["Latn",["AS"]],"wls":["Latn",["PA"]],"wo":["Latn",["AF"]],"wuu":["Hans",["EU"]],"xal":["Cyrl",["EU"]],"xh":["Latn",["AF"]],"xmf":["Geor",["EU"]],"ydd":["Hebr",["AS","EU"]],"yi":["Hebr",["ME","EU","NA","SA"]],"yo":["Latn",["AF"]],"yrk":["Cyrl",["AS"]],"yrl":["Latn",["LA"]],"yua":["Latn",["NA","LA"]],"yue":["Hant",["AS"]],"za":["Latn",["AS"]],"zea":["Latn",["EU"]],"zh-classical":["Hant",["AS"]],"zh-cn":["Hans",["AS"]],"zh-hans":["Hans",["AS"]],"zh-hant":["Hant",["AS"]],"zh-hk":["Hant",["AS"]],"zh-min-nan":["Latn",["AS"]],"zh-mo":["Hant",["AS"]],"zh-my":["Hans",["AS"]],"zh-sg":["Hans",["AS"]],"zh-tw":["Hant",["AS"]],"zh-yue":["Hans",["AS"]],"zh":["Hans",["AS"]],"zu":["Latn",["AF"]]},"scriptgroups":{"Cyrillic":["Cyrl"],"Arabic":["Arab"],"Greek":["Grek"],"Latin":["Latn","Goth"],"WestCaucasian":["Armn","Geor"],"MiddleEastern":["Hebr","Syrc"],"African":["Ethi","Nkoo","Tfng"],"SouthAsian":["Beng","Deva","Gujr","Guru","Knda","Mlym","Orya","Saur","Sinh","Taml","Telu","Tibt","Thaa"],"SouthEastAsian":["Batk","Bugi","Java","Khmr","Laoo","Mymr","Thai"],"Mongolian":["Mong"],"SignWriting":["Sgnw"],"CJK":["Hans","Hant","Kana","Kore","Jpan","Yiii"],"NativeAmerican":["Cher","Cans"]},"regiongroups":{"NA":1,"LA":1,"SA":1,"ME":2,"AF":2,"EU":2,"AS":3,"AU":3,"PA":3,"WW":4},"importanceInRegions":{"fi":{"FI":100,"SE":10},"ru":{"RU":100,"FI":40}}};
	$.uls.data.autonyms = {"qqq":"Message documentation","aa":"Qaf\u00e1r af","ab":"\u0410\u04a7\u0441\u0448\u04d9\u0430","ace":"Ac\u00e8h","af":"Afrikaans","ak":"Akan","aln":"Geg\u00eb","als":"Alemannisch","am":"\u12a0\u121b\u122d\u129b","an":"aragon\u00e9s","ang":"\u00c6nglisc","anp":"\u0905\u0919\u094d\u0917\u093f\u0915\u093e","ar":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629","arc":"\u0710\u072a\u0721\u071d\u0710","arn":"mapudungun","ary":"Ma\u0121ribi","arz":"\u0645\u0635\u0631\u0649","as":"\u0985\u09b8\u09ae\u09c0\u09df\u09be","ast":"asturianu","av":"\u0410\u0432\u0430\u0440","avk":"Kotava","ay":"Aymar aru","az":"az\u0259rbaycanca","ba":"\u0411\u0430\u0448\u04a1\u043e\u0440\u0442\u0441\u0430","bar":"Boarisch","bat-smg":"\u017demait\u0117\u0161ka","bcc":"\u0628\u0644\u0648\u0686\u06cc \u0645\u06a9\u0631\u0627\u0646\u06cc","bcl":"Bikol Central","be":"\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f","be-tarask":"\u202a\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f (\u0442\u0430\u0440\u0430\u0448\u043a\u0435\u0432\u0456\u0446\u0430)\u202c","be-x-old":"\u202a\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f (\u0442\u0430\u0440\u0430\u0448\u043a\u0435\u0432\u0456\u0446\u0430)\u202c","bg":"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438","bh":"\u092d\u094b\u091c\u092a\u0941\u0930\u0940","bho":"\u092d\u094b\u091c\u092a\u0941\u0930\u0940","bi":"Bislama","bjn":"Bahasa Banjar","bm":"bamanankan","bn":"\u09ac\u09be\u0982\u09b2\u09be","bo":"\u0f56\u0f7c\u0f51\u0f0b\u0f61\u0f72\u0f42","bpy":"\u09ac\u09bf\u09b7\u09cd\u09a3\u09c1\u09aa\u09cd\u09b0\u09bf\u09af\u09bc\u09be \u09ae\u09a3\u09bf\u09aa\u09c1\u09b0\u09c0","bqi":"\u0628\u062e\u062a\u064a\u0627\u0631\u064a","br":"brezhoneg","brh":"Br\u00e1hu\u00ed","bs":"bosanski","bug":"\u1a05\u1a14 \u1a15\u1a18\u1a01\u1a17","bxr":"\u0411\u0443\u0440\u044f\u0430\u0434","ca":"catal\u00e0","cbk-zam":"Chavacano de Zamboanga","cdo":"M\u00ecng-d\u0115\u0324ng-ng\u1e73\u0304","ce":"\u041d\u043e\u0445\u0447\u0438\u0439\u043d","ceb":"Cebuano","ch":"Chamoru","cho":"Choctaw","chr":"\u13e3\u13b3\u13a9","chy":"Tsets\u00eahest\u00e2hese","ckb":"\u06a9\u0648\u0631\u062f\u06cc","co":"corsu","cps":"Capice\u00f1o","cr":"N\u0113hiyaw\u0113win \/ \u14c0\u1426\u1403\u152d\u140d\u140f\u1423","crh":"Q\u0131r\u0131mtatarca","crh-latn":"\u202aQ\u0131r\u0131mtatarca (Latin)\u202c","crh-cyrl":"\u202a\u041a\u044a\u044b\u0440\u044b\u043c\u0442\u0430\u0442\u0430\u0440\u0434\u0436\u0430 (\u041a\u0438\u0440\u0438\u043b\u043b)\u202c","cs":"\u010desky","csb":"kasz\u00ebbsczi","cu":"\u0441\u043b\u043e\u0432\u0463\u0301\u043d\u044c\u0441\u043a\u044a \/ \u2c14\u2c0e\u2c11\u2c02\u2c21\u2c10\u2c20\u2c14\u2c0d\u2c1f","cv":"\u0427\u04d1\u0432\u0430\u0448\u043b\u0430","cy":"Cymraeg","da":"dansk","de":"Deutsch","de-at":"\u00d6sterreichisches Deutsch","de-ch":"Schweizer Hochdeutsch","de-formal":"\u202aDeutsch (Sie-Form)\u202c","diq":"Zazaki","dsb":"dolnoserbski","dtp":"Dusun Bundu-liwan","dv":"\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0","dz":"\u0f47\u0f7c\u0f44\u0f0b\u0f41","ee":"e\u028begbe","egl":"Emili\u00e0n","el":"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac","eml":"emili\u00e0n e rumagn\u00f2l","en":"English","en-ca":"Canadian English","en-gb":"British English","eo":"Esperanto","es":"espa\u00f1ol","et":"eesti","eu":"euskara","ext":"estreme\u00f1u","fa":"\u0641\u0627\u0631\u0633\u06cc","ff":"Fulfulde","fi":"suomi","fit":"me\u00e4nkieli","fiu-vro":"V\u00f5ro","fj":"Na Vosa Vakaviti","fo":"f\u00f8royskt","fr":"fran\u00e7ais","frc":"fran\u00e7ais cadien","frp":"arpetan","frr":"Nordfriisk","fur":"furlan","fy":"Frysk","ga":"Gaeilge","gag":"Gagauz","gan":"\u8d1b\u8a9e","gan-hans":"\u202a\u8d63\u8bed\uff08\u7b80\u4f53\uff09\u202c","gan-hant":"\u202a\u8d1b\u8a9e\uff08\u7e41\u9ad4\uff09\u202c","gd":"G\u00e0idhlig","gl":"galego","glk":"\u06af\u06cc\u0644\u06a9\u06cc","gn":"Ava\u00f1e'\u1ebd","got":"\ud800\udf32\ud800\udf3f\ud800\udf44\ud800\udf39\ud800\udf43\ud800\udf3a","grc":"\u1f08\u03c1\u03c7\u03b1\u03af\u03b1 \u1f11\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u1f74","gsw":"Alemannisch","gu":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","gv":"Gaelg","ha":"\u0647\u064e\u0648\u064f\u0633\u064e","hak":"Hak-k\u00e2-fa","haw":"Hawai`i","he":"\u05e2\u05d1\u05e8\u05d9\u05ea","hi":"\u0939\u093f\u0928\u094d\u0926\u0940","hif":"Fiji Hindi","hif-latn":"Fiji Hindi","hil":"Ilonggo","ho":"Hiri Motu","hr":"hrvatski","hsb":"hornjoserbsce","ht":"Krey\u00f2l ayisyen","hu":"magyar","hy":"\u0540\u0561\u0575\u0565\u0580\u0565\u0576","hz":"Otsiherero","ia":"interlingua","id":"Bahasa Indonesia","ie":"Interlingue","ig":"Igbo","ii":"\ua187\ua259","ik":"I\u00f1upiak","ike-cans":"\u1403\u14c4\u1483\u144e\u1450\u1466","ike-latn":"inuktitut","ilo":"Ilokano","inh":"\u0413\u04c0\u0430\u043b\u0433\u04c0\u0430\u0439","io":"Ido","is":"\u00edslenska","it":"italiano","iu":"\u1403\u14c4\u1483\u144e\u1450\u1466\/inuktitut","ja":"\u65e5\u672c\u8a9e","jam":"Patois","jbo":"Lojban","jut":"jysk","jv":"Basa Jawa","ka":"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8","kaa":"Qaraqalpaqsha","kab":"Taqbaylit","kbd":"\u0410\u0434\u044b\u0433\u044d\u0431\u0437\u044d","kbd-cyrl":"\u0410\u0434\u044b\u0433\u044d\u0431\u0437\u044d","kg":"Kongo","khw":"\u06a9\u06be\u0648\u0627\u0631","ki":"G\u0129k\u0169y\u0169","kiu":"K\u0131rmancki","kj":"Kwanyama","kk":"\u049a\u0430\u0437\u0430\u049b\u0448\u0430","kk-arab":"\u202b\u0642\u0627\u0632\u0627\u0642\u0634\u0627 (\u062a\u0674\u0648\u062a\u06d5)\u202c","kk-cyrl":"\u202a\u049a\u0430\u0437\u0430\u049b\u0448\u0430 (\u043a\u0438\u0440\u0438\u043b)\u202c","kk-latn":"\u202aQazaq\u015fa (lat\u0131n)\u202c","kk-cn":"\u202b\u0642\u0627\u0632\u0627\u0642\u0634\u0627 (\u062c\u06c7\u0646\u06af\u0648)\u202c","kk-kz":"\u202a\u049a\u0430\u0437\u0430\u049b\u0448\u0430 (\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d)\u202c","kk-tr":"\u202aQazaq\u015fa (T\u00fcrk\u00efya)\u202c","kl":"kalaallisut","km":"\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a","kn":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","ko":"\ud55c\uad6d\uc5b4","ko-kp":"\ud55c\uad6d\uc5b4 (\uc870\uc120)","koi":"\u041f\u0435\u0440\u0435\u043c \u041a\u043e\u043c\u0438","kr":"Kanuri","krc":"\u041a\u044a\u0430\u0440\u0430\u0447\u0430\u0439-\u041c\u0430\u043b\u043a\u044a\u0430\u0440","kri":"Krio","krj":"Kinaray-a","ks":"\u0915\u0949\u0936\u0941\u0930 \/ \u06a9\u0672\u0634\u064f\u0631","ks-arab":"\u06a9\u0672\u0634\u064f\u0631","ks-deva":"\u0915\u0949\u0936\u0941\u0930","ksh":"Ripoarisch","ku":"Kurd\u00ee","ku-latn":"\u202aKurd\u00ee (lat\u00een\u00ee)\u202c","ku-arab":"\u202b\u0643\u0648\u0631\u062f\u064a (\u0639\u06d5\u0631\u06d5\u0628\u06cc)\u202c","kv":"\u041a\u043e\u043c\u0438","kw":"kernowek","ky":"\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430","la":"Latina","lad":"Ladino","lb":"L\u00ebtzebuergesch","lbe":"\u041b\u0430\u043a\u043a\u0443","lez":"\u041b\u0435\u0437\u0433\u0438","lfn":"Lingua Franca Nova","lg":"Luganda","li":"Limburgs","lij":"Ligure","liv":"L\u012bv\u00f5 k\u0113\u013c","lmo":"lumbaart","ln":"ling\u00e1la","lo":"\u0ea5\u0eb2\u0ea7","loz":"Silozi","lt":"lietuvi\u0173","ltg":"latga\u013cu","lus":"Mizo \u0163awng","lv":"latvie\u0161u","lzh":"\u6587\u8a00","lzz":"Lazuri","mai":"\u092e\u0948\u0925\u093f\u0932\u0940","map-bms":"Basa Banyumasan","mdf":"\u041c\u043e\u043a\u0448\u0435\u043d\u044c","mg":"Malagasy","mh":"Ebon","mhr":"\u041e\u043b\u044b\u043a \u041c\u0430\u0440\u0438\u0439","mi":"M\u0101ori","min":"Baso Minangkabau","mk":"\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438","ml":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","mn":"\u043c\u043e\u043d\u0433\u043e\u043b","mo":"\u043c\u043e\u043b\u0434\u043e\u0432\u0435\u043d\u044f\u0441\u043a\u044d","mr":"\u092e\u0930\u093e\u0920\u0940","mrj":"\u041a\u044b\u0440\u044b\u043a \u043c\u0430\u0440\u044b","ms":"Bahasa Melayu","mt":"Malti","mus":"Mvskoke","mwl":"Mirand\u00e9s","my":"\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c","myv":"\u042d\u0440\u0437\u044f\u043d\u044c","mzn":"\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06cc","na":"Dorerin Naoero","nah":"N\u0101huatl","nan":"B\u00e2n-l\u00e2m-g\u00fa","nap":"Nnapulitano","nb":"\u202anorsk (bokm\u00e5l)\u202c","nds":"Plattd\u00fc\u00fctsch","nds-nl":"Nedersaksisch","ne":"\u0928\u0947\u092a\u093e\u0932\u0940","new":"\u0928\u0947\u092a\u093e\u0932 \u092d\u093e\u0937\u093e","ng":"Oshiwambo","niu":"Niu\u0113","nl":"Nederlands","nl-informal":"\u202aNederlands (informeel)\u202c","nn":"\u202anorsk (nynorsk)\u202c","no":"\u202anorsk (bokm\u00e5l)\u202c","nov":"Novial","nrm":"Nouormand","nso":"Sesotho sa Leboa","nv":"Din\u00e9 bizaad","ny":"Chi-Chewa","oc":"occitan","om":"Oromoo","or":"\u0b13\u0b5c\u0b3f\u0b06","os":"\u0418\u0440\u043e\u043d","pa":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","pag":"Pangasinan","pam":"Kapampangan","pap":"Papiamentu","pcd":"Picard","pdc":"Deitsch","pdt":"Plautdietsch","pfl":"P\u00e4lzisch","pi":"\u092a\u093e\u0933\u093f","pih":"Norfuk \/ Pitkern","pl":"polski","pms":"Piemont\u00e8is","pnb":"\u067e\u0646\u062c\u0627\u0628\u06cc","pnt":"\u03a0\u03bf\u03bd\u03c4\u03b9\u03b1\u03ba\u03ac","prg":"Pr\u016bsiskan","ps":"\u067e\u069a\u062a\u0648","pt":"portugu\u00eas","pt-br":"portugu\u00eas do Brasil","qu":"Runa Simi","qug":"Runa shimi","rgn":"Rumagn\u00f4l","rif":"Tarifit","rm":"rumantsch","rmy":"Romani","rn":"Kirundi","ro":"rom\u00e2n\u0103","roa-rup":"Arm\u00e3neashce","roa-tara":"tarand\u00edne","ru":"\u0440\u0443\u0441\u0441\u043a\u0438\u0439","rue":"\u0440\u0443\u0441\u0438\u043d\u044c\u0441\u043a\u044b\u0439","rup":"Arm\u00e3neashce","ruq":"Vl\u0103he\u015fte","ruq-cyrl":"\u0412\u043b\u0430\u0445\u0435\u0441\u0442\u0435","ruq-latn":"Vl\u0103he\u015fte","rw":"Kinyarwanda","sa":"\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d","sah":"\u0441\u0430\u0445\u0430 \u0442\u044b\u043b\u0430","sat":"Santali","sc":"sardu","scn":"sicilianu","sco":"Scots","sd":"\u0633\u0646\u068c\u064a","sdc":"Sassaresu","se":"s\u00e1megiella","sei":"Cmique Itom","sg":"S\u00e4ng\u00f6","sgs":"\u017eemait\u0117\u0161ka","sh":"srpskohrvatski \/ \u0441\u0440\u043f\u0441\u043a\u043e\u0445\u0440\u0432\u0430\u0442\u0441\u043a\u0438","shi":"Ta\u0161l\u1e25iyt\/\u2d5c\u2d30\u2d5b\u2d4d\u2d43\u2d49\u2d5c","shi-tfng":"\u2d5c\u2d30\u2d5b\u2d4d\u2d43\u2d49\u2d5c","shi-latn":"Ta\u0161l\u1e25iyt","si":"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd","simple":"Simple English","sk":"sloven\u010dina","sl":"sloven\u0161\u010dina","sli":"Schl\u00e4sch","sm":"Gagana Samoa","sma":"\u00c5arjelsaemien","sn":"chiShona","so":"Soomaaliga","sq":"shqip","sr":"\u0441\u0440\u043f\u0441\u043a\u0438 \/ srpski","sr-ec":"\u202a\u0441\u0440\u043f\u0441\u043a\u0438 (\u045b\u0438\u0440\u0438\u043b\u0438\u0446\u0430)\u202c","sr-el":"\u202asrpski (latinica)\u202c","srn":"Sranantongo","ss":"SiSwati","st":"Sesotho","stq":"Seeltersk","su":"Basa Sunda","sv":"svenska","sw":"Kiswahili","szl":"\u015bl\u016fnski","ta":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","tcy":"\u0ca4\u0cc1\u0cb3\u0cc1","te":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41","tet":"tetun","tg":"\u0442\u043e\u04b7\u0438\u043a\u04e3","tg-cyrl":"\u0442\u043e\u04b7\u0438\u043a\u04e3","tg-latn":"tojik\u012b","th":"\u0e44\u0e17\u0e22","ti":"\u1275\u130d\u122d\u129b","tk":"T\u00fcrkmen\u00e7e","tl":"Tagalog","tly":"\u0442\u043e\u043b\u044b\u0448\u04d9 \u0437\u044b\u0432\u043e\u043d","tn":"Setswana","to":"lea faka-Tonga","tokipona":"Toki Pona","tpi":"Tok Pisin","tr":"T\u00fcrk\u00e7e","ts":"Xitsonga","tt":"\u0442\u0430\u0442\u0430\u0440\u0447\u0430\/tatar\u00e7a","tt-cyrl":"\u0442\u0430\u0442\u0430\u0440\u0447\u0430","tt-latn":"tatar\u00e7a","tum":"chiTumbuka","tw":"Twi","ty":"Reo M\u0101`ohi","tyv":"\u0422\u044b\u0432\u0430 \u0434\u044b\u043b","udm":"\u0423\u0434\u043c\u0443\u0440\u0442","ug":"\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5 \/ Uyghurche","ug-arab":"\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5","ug-latn":"Uyghurche","uk":"\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430","ur":"\u0627\u0631\u062f\u0648","uz":"O\u02bbzbekcha","ve":"Tshivenda","vec":"v\u00e8neto","vep":"Veps\u00e4n kel\u2019","vi":"Ti\u1ebfng Vi\u1ec7t","vls":"West-Vlams","vmf":"Mainfr\u00e4nkisch","vo":"Volap\u00fck","vot":"Va\u010f\u010fa","vro":"V\u00f5ro","wa":"walon","war":"Winaray","wo":"Wolof","wuu":"\u5434\u8bed","xal":"\u0425\u0430\u043b\u044c\u043c\u0433","xh":"isiXhosa","xmf":"\u10db\u10d0\u10e0\u10d2\u10d0\u10da\u10e3\u10e0\u10d8","yi":"\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9","yo":"Yor\u00f9b\u00e1","yue":"\u7cb5\u8a9e","za":"Vahcuengh","zea":"Ze\u00eauws","zh":"\u4e2d\u6587","zh-classical":"\u6587\u8a00","zh-cn":"\u202a\u4e2d\u6587\uff08\u4e2d\u56fd\u5927\u9646\uff09\u202c","zh-hans":"\u202a\u4e2d\u6587\uff08\u7b80\u4f53\uff09\u202c","zh-hant":"\u202a\u4e2d\u6587\uff08\u7e41\u9ad4\uff09\u202c","zh-hk":"\u202a\u4e2d\u6587\uff08\u9999\u6e2f\uff09\u202c","zh-min-nan":"B\u00e2n-l\u00e2m-g\u00fa","zh-mo":"\u202a\u4e2d\u6587\uff08\u6fb3\u9580\uff09\u202c","zh-my":"\u202a\u4e2d\u6587\uff08\u9a6c\u6765\u897f\u4e9a\uff09\u202c","zh-sg":"\u202a\u4e2d\u6587\uff08\u65b0\u52a0\u5761\uff09\u202c","zh-tw":"\u202a\u4e2d\u6587\uff08\u53f0\u7063\uff09\u202c","zh-yue":"\u7cb5\u8a9e","zu":"isiZulu"};
} )( jQuery );
