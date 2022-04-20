import React from 'react';
import { render } from '@testing-library/react';
import RotorAssembly from './RotorAssembly';
import { Rotors } from './Rotor';
import { Reflectors } from './Reflector';

describe('rotor assembly — single input', () => {
  const tests = [
    {
      name: 'should return F',
      input: 'A',
      expectedOutput: 'F',
    },
    {
      name: 'should return Y',
      input: 'G',
      expectedOutput: 'Y',
    },
    {
      name: 'should return R',
      input: 'J',
      expectedOutput: 'R',
    },
  ];

  tests.forEach((test) => {
    it(test.name, () => {
      let output = null;

      const outputHandler = (o) => { output = o; };

      render(
        <RotorAssembly
          input={test.input}
          outputHandler={outputHandler}
          reflector={Reflectors.B}
          rotors={[
            Rotors.EnigmaI.I,
            Rotors.EnigmaI.II,
            Rotors.EnigmaI.III,
          ]}
        />,
      );

      expect(output).toBe(test.expectedOutput);
    });
  });
});

describe('rotor assembly — multiple inputs in a row', () => {
  const tests = [
    {
      name: 'should return FTZMG',
      inputs: 'AAAAA',
      expectedOutput: 'FTZMG',
    },
    {
      name: 'should return FTZMG',
      inputs: 'FOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDO',
      expectedOutput: 'ALXDYFUDTUTYPKQKQOGRQPWSWARSYEBXLCMLWKTDZGTQQLGVRSKVRSZOBNPOSVIEEYQFJNQXTNRBZXCRITDGWPXVVJAATXHK',
    },
    {
      name: 'should return FTZMG',
      inputs: 'FOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBVFOUEWUYGMEWIUFHHHFKJEWMBSDGFHHGRYUIEIUWBMDSMBFUYEWMNBDSFUYIWEIOUYHFEWUYGFHJVWEMNBVFHGWVEFIUYSHDOQWPOIQUWEMNBZVXCZNBVASDFLKWEUYFUYREUTEWFHBGFJHKGWEUIYDGQWOPIQWEJKHBDSFMNBVZXCVJHKGSDIUYTFGQWIUGFEHGWVANBV',
      expectedOutput: 'ALXDYFUDTUTYPKQKQOGRQPWSWARSYEBXLCMLWKTDZGTQQLGVRSKVRSZOBNPOSVIEEYQFJNQXTNRBZXCRITDGWPXVVJAATXHKMZRICXPDXHJYNUWRJEUPWPMJTFQYDHXSXJLLBZNYOROWBKAUZGNWFGTWOIHPVGUQEYKZJHFBVZSIJAKRHMGZCADCNXWNXNEVKLJMJOXHDVPXFXKBLSPNTSPJISQXBRAWDNHCSUVVYFDZOAMPRXZXZZWAUAGQWGGYDGVQAPZIKZDKXAKOKRXVMGAIVGNLIEMZVNUSKXWJEAFEMSOZIOBGTKQMLEJQMDZQMNPOROVTEVHYRLXVTUHKGQZPYATEWIEBIYQVKTGLDLRKLDLBOFUQOLUIDNIVZOOCXDPXEDIDIYZKFWNLKRIUERGMWDVZFQGGAARBPLMEGQGAIKBKLQHIEHGPQMVPACEKFNLPLCZMFBBHVRDDGRFBXYJFUSBWXINGVZPDBFTFRHXGSLJTNDMAITYRLFBLTFSXCQKJYUZQZQTECDQXBSLZSBBVCKXCSKCGYQMVYBLNOHTRGZXHATZLOCWTLRHTDHHRZIHMMRWXSORKHZWMPOTDODLBTXCZVPQVLLYLJLBVUVUNBBHQLDYPNEMQCKVOAMVZSYCJGEGRJGFQSTJIVJYKNUMQBDWZKQOUJQUQIOELBRGYDXLNBGDELQHHDZXSTXEEEHZKSHHLUCTTUKMUABAQBMQNOHRXYVOIJJUYDLUSBEEPSFAIFDNVWYZIJBXLEVKYBAWZRGVNSPFHYPXFSOSONJSRYEXOPHUABFTXCYQZEBWJOAAUVYYEFOXDFLXPJYTBLOAVMNGKSYIGGAFCIPKRXKVWHANHRTOCUEEOKCKXCKPJOLUESSXXLWHWVYDCQLBZKTMVSPOCGXMKRDFIMOABJQJKQFLUUSXSZOMVPNOVZSRGPONSRQMNGMKCMNWLXYZXJRDDQJCMKGWXUUCAUOHWETOTBQGNDBTKZMZYISWLTTXHDSFADEIMLPRAFBRIVYTOBXZRPZKBJVMDAPDXTXDOQWEIDWMDWRANVKSDTTRPZWEKWWQDRPFUBQSCCSCVZXBRTLMPNWFEGQWWYBKUFFVSSMAVPVMMGLXQOPBNLDNBDSQQLSAAXJZZKXLABXBXWOZWVSVTHOSHRYEGDGLRXALTQTIJCWEALDHLCLKNACDJSEPZQTFLGAUDWTSBAQNBFDDVOSBTPBVBFMYKKEZUOXVYALAHAUQQRFELLJMDFDRGJYLCFRVBTEMNYFCNCCFVRXPPSLYUGZWGHKOFWLDRNWVQIEBHADGOEQDNKHYCNTXBJHDATHQAIBVRPHXOYAYWXROLJJRBNKSTTVVKINMGALHDPXHMJNKDTBOFSPYHWSHVAEKGLPMYYLEPYZWLTFUCDPUHTSXMGWSYGKYEAZDVZQFQBUYKUVCFSASIRQQMDIHWZTQVWWNWPQAKRHUJTPYYRLQDZTVLTSFNXWDAFELZWPJOOAIWWPRPLWJTYNZOXNUDOZDTOEVJWFMMQYHDFOXPXLVPQQMFTABEDRTINEAIIFVIEFCNJGNZHFPTWJHDAHRNYJRQPHGOTYAMBODTHUAEMDWHCMRYUWNKIKOMNZTHHUFPTKOJDHSZUXBEPKHGMJOXEFKFZQZJJPDWRHFCLBSFGVVEPANMDURHUSNGNNPXNRPBKNKCFGQCDQCKHRQPXFCMYPHICNKXMVIRUJBRPUIMDGZYNYXLCFJEJFYOWKHWOUYRPCRYQXWVASRSYBRSAMJRQROIOAHUQXJNPUNKOIVRUVHYANGNYZCWQVSZIFISSBCVCHYWKPKIGRZULTQLNSKHNOOZLOIZJDHYVBPVQNJEEDQXKUVBRQLETQLSCFVHSVDGFXKPAVYNCDUUDTDCOTTAXYDFPZEMTPSEXSXSQWFGTCLPFKFMZFJHKBANJLXAXJUKCGPDUZKEWNOCVEZPHZPEECUYVKPOESYGHABPVVMQGTECYTCVVTBELREXDHSYEASWQBLCPKJUEVYWXBAHUHNNXWVQWCYDROMYMXDIVMJXTBZQHWHUJYOYAHSRGMPQFKZRRAIKUTUFLRLJPROUNPGYQYKATGJNNSTLPRLYBBFDOAMNMZDZJPMDOJNDYTVDRLUYSXIWYKCLVNABAUZMMVQGLJXQAKBUNKHSZBHXSTPNFBNGXZSXESORSITNGUHATVYYLACGTGMQVRAIXJPIRTPNCQEFTGCGRYKTMOYNFJATEIPJNTTVZAFQVEDIWUQRZTRSBJHVIKXVBWXPORLMQJVYKBYVLBGPOGPRFHTALWPSDFSXEIXGLYAQPDJCRDGYIFPNCRPBZYDOSNRPENHOHHKPIYRIAYTHBBRCXPBNHLEREXPLRASEFLNBPTEGPAHMMCBTKKBMBBDOPLIKNJIZFEHCEOMCPNQBYIQZWLMNHDISDRYPMLDKYSIHITSQPDTTNHJABXKPFYLMPTAVSWMHRBWVGBKHUWQBPCZPWXVGUXDFNZVDTZPMYSBLZCKJMSAABUANAOACJIKGKKMANWCCSPEQCONVZOQMYPDVDYMMPEALZLPPVZMTMRRMBUURIIUAUNJIVAMLHBFTIAEZDBZBSFICZHWPWPQXALAKNGIDRUGPNFRFHTUZNWTVUSOCLICRMQDSPRECWTZAANYEZQIRQDEHOZOMMIBEAQBYZARAVXKNLKCBALZJVCKTLUSSCEUNMYMTUGSVRTRMHABJAJRAFTGDZXDJAZLZLBGTKHEPRMOAZENEPNTMRTUBMEIZKCZAQFGIWVSKRCQSPVBARHMABZUXWUTVIOBNUAGMCYSMTKYCHQSQIAXNQSWSROOXBFILNRCVSUCIIPJIYONFVYLIZRPHUINPODZKWFYWGHVPQKKMKQIZBYLKRNDLDAXYXDOADJDKACPGJJNKIENUKUUJZVQSUNNGZUYYJOCCYMGXKAHBIYHVRDVPPPZXCPMUYIMHZOAHINCTVBCEHKIGEJHEOXQHMUQKHKYELCTTEKHKFTFDSYQFQUDPJHL',
    },
    {
      name: 'should return FTZMG',
      inputs: 'ZSYMHEXNIFNHUJLOGRBCCIKVPSGEZVUHOJVHJVMTTBVEKGKAVRGVXTGWSTCGQMWTCOYITADMNEZPLUGEEHMAUYVCKCTRCWZPATKPORMSOVGRLNVGWPEZHHRKVZGJGEEPNRVPAQCJQJQEPMPEUGKYFFNSOKGTQIMNCULGJJOKRYRSEQYQFOSFVZXOPVRCKKVMZMUPMPOEGUYPCFMHNIGWPMDJQPIJNITIHOSJAHPBQPIJPSXFHARAVVCEXRXDFFEFFHOUPTVXCLUNUEDYLAOJGSEIHECHIMOMFGSHLPZACHTXBJCVIVQPJJVCTMQVZMZQQUWXXFWHTNNPFPWUCFVOXUJSVXOAYHGZJUHERJCREYBVCMHYMTUYDGULXQAIOFSKZOXSWFMEQXQZPPWSTKARKFILQJCAWDRKZVLAQNOOSRQJXEKBEFAUBXQJHUTRJZVHDCSVLJMWBUASTOJGTQGDBOTSMTSKOCJVPVAVGBSOQFEMXBTGPXRQUVZLMHRWBTJPJYCECYPYPSNLMKNQBNYDXBZTUEDRBKKVWXNFRMXJXIDGOURIHDNLMCFPEOSWPQKTAWEHBDJZUMPQMBFESVZMERZLYHXMEIFDMDZNAWEHEIOVYWYHYJTLZXDHNMRBDAXULVPRXXMRJNTTUGGVBRPWHWSJLFCIXTHNQWGBDFEEISBBEEFCSWMHHCHRNHBVWUKHQPDRBWMGZDRENXWNTCFTNTLJCVAJFYQCFKBBABQXNDHYQKYBTAIIWHGTSLZODCLPDNPPDEUDOABDPZRVFJNZSKLNNGHANRPOKOKEWLPVMBWGYXKMKGDHRZZEWLJDVRMAIBEGGSRHNFMJGIDIDGRZLWBWBUSBGPFVQCZRNUWOYXAWJBGPJFISIUXYXZUHIGZAUEXUPEUMQSQRSKYRYHSZVYDRUSDPVMSWYQKMWDCFQJHMPTUJUCZEHZZRJPBVVFIRNQOSQFJENVUBFSAGOQELOSPJITTIFHCXGUKFGSZNGYXTKHASOQBDOCEKFHOGSNLYKTGGSJITZCUXCUISHMGCOYHEBERXNOYGGKBTNNZJBVBPLAOJKCFZKGOALVYPCHTLCNMHAGKZFSIMEDNHRBMFVANCMVASCTYFZIYYZATJORSSDJUFWZVYQMRHJIEYBSMHDBNTTRCFPRQFEMFOWOERBKCTRMSKWARVZKMGKETQEHQCYJKEGSRBNXKFKQPNRSBLYCDINASLUKZMTNSRWAIWFYVJJXEARGOINFHPMQSHZQLGGZVRAAWTBZBVBMTFFIZYOZOFYZCHKEWRAGMUXBKYODUNFNRFDVJARTPXAEPCBKTGTOFIKGICMWICBBIJLGFQYWUYYEUAUEUYRUHDNGXGHSGLDNTTHZBJHKATNBCPULMWHAHZNUKVVJUEGYTATCCOEDKVEJEOAZWMIPAHNNYENPKGLNBWATAASNEPPQGJXYIPERQGTLSMXCHJSAQILOQGCOFYNAEHZQTPUTONPDVRBMYLBNUUOMLLPNYTTNEUUDEGFCTFUBKAZDIXQZAVORNCZHOYXJXNCYSXIMCTHKGDSSLKCLPPKDNXYTCHIDMWLKBGGUJEZKFOTCJDGVJTXYTWHDTFTVCXXWHEDZODUYOFLCGBOCIATKKMHEYPJGUDGHDZWLBCEFRRUYLLVXJUQGMXGYABCPPEHIZOPBNCQLADWIQUGOPADLCFGNXMTMTRZECMXSPGVHCJLRLTEJLDSDBKVPDEJKPARXMNJBUPYKVZLODPRWIVUTRZVPCPUXBMKKYLNFJAHOXCIEKHLPLYQJSWKXNPTFHYIONDLFSSRKXULANTHYWATLWBYQVIYQKOKHUZGUNFNDVBMGDKELCDHUHSHCAPRZUBIQETIZLXQEMTUYKAWPZATDPILBSQYWYAHUTVEFEWATEEALIPBWSDYVOKFSOUEWLEMSRNYTGERKPUNRCPFEQCTEAEPXQPZHECNGWWHKGILPZOROSYITWUMKAKPQCEAPLUSSHDXVEPJCYJDFRAIQBGLWSQMREVLIMBLIQTTBAZUOILVEDSFHCMWGWBBZPTEHBLKODASGCSWFIBATUVCZQXLINCOVJPUZWLMSMDCRMKRVKXBDJSXKUGHKOGTXYDMRJJUFCQRJXLJEAKWOWKVJCKUJYZBNGSQUITDUDEVLZEUVWSYXGZVQIEQROTUETFAWMZURXHZLVIALNOVJSMRHSWBGCIDOMNALXFZKFGWINIGCCZZNDWVUCFOYKLJIONAAEIGQNXEYIWWEQHUUJXYLVFHUUFHZFYMKOSVXYMKDLKIDHXRYMXNFMJIZUGTDYIRSQNNDEWDYYOXXJIJKPDPROAUKXDMXGXUJQADVIRGWYYALWUSYDWJGXQILFDSAWRIZBKUVBYUSWLTDCZQJXYMRMULMNSZICYLKJPLZZWKKXNSVQBDOLOKUAOQZWMKDIQYZFPVBXDVCCNTIQITOBDBTBTSSBTOUWHOFVPJZDTDIQJBWUPSYWAAKJUBMRMTSMERUANJFJLWSRYCNWZEKYSVVIAMIXPUMMICTSZMEBFKUCRYLTONIFWWZKVUWSOTXJEUMPHMWNAWZSBIZFMULXSRXVSKDKUKGCJTSTLWWSEZJKSPKFIJTFHGVSVWDSGWCIKWBZTZZDRSXPRYVDMGLBHZRUEBUAEEXOCVKKKPBLQGRKPVRVKSODLEVECSXKHFSNEPAMJRFNEMQZCMPBKDLNNINFDXOMXDOGJJESXJIICQSFSFNAXSNVCFIWGHBCZWJRETFAWPCVVJBKRFQUZDFKLDWSAABVIGGYAHDGWPRAJASYHOGQDKXKAQBTUPAADTNOEFEDBFLDTGNGDGLRKKJTWWSXPHEWGYDCXTTKRTPXRSGOIJIFCDRJJAKSNNQWRUNYAOKHAOHGIWQSWUIPEDREMTLFKRANXFGKZWIYVUZGORSYECZDJKRTPTLSVXTCJMQUVDXAVJTJUIRXPRRRSNEXVUQJIRNVQVLCMMZVWARIAQTFSZWCWQZBEHGSKFUWODSLEQWJIZEBOOVCNQTOFIWTPLCOFGXSVZCFGFZFZMDJWNXLFZGEMOUSNWWRWBPHSYQINFDDAKDGSWDCBXONESYNWDJPPPIOMLSGPTCPWVPPEIAWDAGXWYUJUTIJGGZOYIYMUBKSOKKLMTMECWMXKYYDNGKSINVACCGEHDKTFMSHMHEMLXSNRTZJIYXBHAYZAUIJUGYDERFWYZMLSPDEAYRMAHRKSUAJXTYPAFVIIINTGQNAIZNFRQPENEPXXVCLQOLITXYNQIZEOIQNWHYTDDYUZFMWLHWFWQVYIQQCSSDGFABUIAFQBJZHSUOCMMJKOUELFKCZWACABXXZVKEPSWLNUAANQHNMSNAOYVZUJWXOBKUNIZUUHSZSNOEAGBQZMMWLHFLDWNFWOOBGUAULOAVVEXBNIWKQIGZZBWTEAKTQMDIRNFOSXWNZFDSPGIKPNWIDPKOOQWYDZWNTIEMNGQAEPCNEFFOPNUVVYOFBUZUQEEAFQREBPCKHYZFSXNVVAEXEYGPWRTGLFCJZAYPFOJBEWRYLLCMWANDIDKPEZVVTGDCDAGAONUNNLEVLRDFVPWQALTKYPHUUQCOZMARDRDRYQXTLJJHGLWLVVMOLYSZEECWCSHMQYMOYYMFRDRBOAOZCXBOPWZRLNIJAQCTUFRWKOSHPFQEQJFSCJTFBKPNJHTYVOISWQICFDBETFTMPYTDOEADBXMLEXNDVVYYLFENPRFLVASSUITCAOPCVXWPIWPSEQPEZJEIEBEDCUBDYRWHLICBGEVCYFVXMDKYBEHKGYUWSMSDVBTLSKZWMDQFHCGQVZSGJRAOLHOLIFZDRRNGWLRLOTPAMUOXSERXROUULDBBJJDBNVTYXSDISLZSGOBJIOLFIAGONSDFWGYHCYULPFBJVEWZFSXZQYYAKJXVEKYWVXWWOKQSZRUKJREOKJGTQVHJKJXWTUWXJBZSVKGIDRZUDTOHVTETZTRXPDXIZDMNWVHAVEMNSKKUJCAUTZVAMXBEGMRRCKWBMTMROKSPPZLDHCSKLOADXSDHSGBSDJGUCUIAZKESOCVAQAYTDZHMNQTIPRIZKCKONPOXMPNHWRXDXCDJPMOGJOKIQZDNBXERZFBNZVQAVWFSDJLNVVSLTWBATHRFHUTPELXMHPLFDKRODLZXYMCPWDNSUOSGBHAELRQAGXRHBHFIDOWKQUDPMOMCKDPGQUIWFSWSOWHIDFTVKOFPFJTUTPABLIUQMHXJUCJFWQJAPLJQGZRAQTIQHIBIXCGREJMRUNYGEIHOOIYFQZWSJNFZNCISCCRFHDDBLFJKYXABTJEKRMJRSTUWFCGRWSZWGXULDCDPITLDKSZIKGIEWWCIHNJAOAWLJNYBQOLGRNVKBDKMAOFDITJWSZUSCKVPQDTTUBXBHZEBFJONGBUEHWSEUBISFIXAANKLMCYBAABTGGXMNNQHSHKCOJUPPAIMAFLIPMOYRJJUSRPOVSPCTSFPJBFMQZVDGMBBUYREUELHKWABVADVCKROUHQOQSFIPLWKLLQDLYSRFAPOASSJLOBBAVTXYEEAZAEWYNRDXFGSMCKMBTXNUSCOGGDSVXRMXGCFJOIQNVQCVWYPTGWCKNFKOBJLFQBAPUWGFKMQWHTAUUSVIXVWHJJYHGJMSICTSAWHHFTETBLQWAYFDHQJBTKQNFRNVPWXNGNEZKLYGKUODQHNLVPGAXSDCFXFNCDSTUODGIYOXYIMOPEJLMMLOZGEJYYXBFGYBNWYDVOXHSTEOGHAJJTQFWDBRXENUDRFXNZMVNGMPVOARSYQMRDOJZORWKXNCAIYJSQMPFIACICCJMMWMWAPBOZOISAATJCRMGLLOQGBSPSGPXZFHHBERPDAARJBOWUWBTKCFDMEIPXXUDXBQTGDHNRLWMFGNWMJFEBRVLZMHBLUCVBPQCCXDTTPHJCGXLKAKTVEMPWYIRTGXXLZDCOEXGXPZKKTVZKBMSWUWJAPRGIXQOCAUW',
      expectedOutput: 'TRKAKDZCAOFSPWBLSGNGXOJMCYRLLRWMPGNNNLORGSYYCIHHHIENLXBKMDQVXYGQXETNMGGWIGVMJBITSUBDAUXTPOVGJNAVOEYWUDCLLJRUJMOHUKKIYVYAKJSGTVBHZJWYFFOKLLAXKQCCFEGDYWRLWXSGVZVVFKMCSKNHNBJPHYCLBTGNNFGXXLTJWZHYYSFVYDJSSIDOQUGURFTNHXUHADVPOSDDSCAEHUEHCBKRMMOKKBHKOKPSKMOEGCIJDBSDIJQEFBNCGHSOEKZVUDAMOIBMHQDSZJWQUMDYBEIGLLXLWUDXVRQBGYHWPBSDDITVFZJYITBUBBOBMZWHUYSIXZGGRXNODODODMEGSIZRIFEKVYVMTHVHTFMZNUNEMEUTEZEYJGTBGETUXTYMLPOVUKRRFHPAOPANZOBSHJORFIZQJMCIJMKAYIQJXPJWJTIZMKLBZIQPETIJZALXOSLMNXOGURDQUDHDNWRGCZBYTWRYCSBHGEHVKKMPZYQSBZUCOXDWJOOIUOFBFWLPAUERFMMSUFITTNZXCGGCLRGIWJFZTLTHIDMKPJWJHPWEVDIRDRANDRKZERXLZLIJXODSRJTGMMNIZMFBLLPISOCRUZVKUKDGPORQSDVIJKKGQBDZODGBFCMNOPIAHGEGJEHYYENOWPMREIUSKDVFPJXYMCCELIQMBZYXWXJFTJMAEZEJXSQDAOLKUSKBKUAJQQOHUYPKZDLOVPREHXVYLPDHJWGHOBWZOWAYYSETFXXDCRRJCFOGIDMRAVAKMZBIQGDAEEWZRMEEUJDYNPTCNUYJZTEHLXNEDEFPIWPLUPDDAKNUIPTZATXAMHHVYHJTAKZNHENKYWNYHUTYXBUWPNLYXRNHBLJBYFYUACRFEYSTIBRTJVHUBPGAICTKXINOBBHQNFLLTPGBEFHNEWIQGINHHXYTHKFUQYMYUOQTAGTQYJUIKLSWEHORPNXBRCZOZXDSBMZMDUKEPMLYZHXSDHNSNYDQBGPLWWREILYSWKDGGRRFHLRKVJBHJLSAXVPVTXRJNRSMIJFASBPCLHQORUXQQBIRNXUVSICPPTIHKIKHFTWSHDMTXQBGSZOENEPPBNCJVZZVGBEWKHGGKSAIFWAAOTHPVDKNLZPWPYFIVMQXHRHGZIRQNDAZQOVFCMZYHDHYGUQNBXJCFWWJRKFJLVIRRZAYWQZZCUIUOEMAQOAONOOKXJZWCWIJVQZQKKBEMQUTVFAXWEXCFRTAYMTPRXBTOEUNEYYHFTTYKWGEGMHZBYRNRNKEWJMEMYSBMJNGTJSSSEOCHGTHDJJDLPISJLWZDZRNEUKAOYDPUCULNSGYAPYQFVTSTMOUAGBIBFTAOVOIUDUMDROXQWFITGZNRBPPNWZELNBIIQORTJCCSLFCHRDKKMOHCYHWXIJVEJGQESUMXTSCVBEHQVQTGPJXKZHHTKPPYYUXQIQUINALQLUHWWWPIVWMFHXRZJYLZEBHFNBULYSRUXVDCPCBEUNFDJHUCKGAOFJMKYACYPLTFOJIJRGHGVGRGDYMAZEUDYOKMNOPGQMYOICBEPAQPGXZZVJMHVVHDGKTXWXEHGCXGPOYCRACLGTOODBMLUKBWVPDPJJXTSHWGVOPVFXNKELLDXVSRAXQTIIFGKBXDQYBZMUCLAHIZBJDTJXPKYZEHNSMKUYXIHVLGYVLOSCNEPRENLDUZGXAJLFAFYWBOGEJOYHUZSYLHDEZFHLCNXKXFNWLKPMJKRYIQJGXFMBDEDWWQAJFTAWVSWFBUYXKETXOSZCHBITDXEEZVIBHHALBFGFVFXBOMOYNLKDOZJTXCDWWMGYGORTXGYSVPDMZMVIHLAWOEFRVNGOUYUDAVAGWCJKLJRUWUXJKRWNFTTLLFBNVISSXCQHPPETPWFMECEUKEMBBCVTGBBYCSIFWRNDLZAAJZXBQUBOUBSJAYKTUYSHKTTANZQVYQLULONUKQPFMQOLZGMGWBHDREUXGIGXOSFRZKQPBNFIAOKXAPJDTGHKTQZXNIFBRABEAOAHPSAGNHYPTKLQNCKOKMBNNBADEXKMEEURZEAGDFORRMSYAKXGDQCUGWPTTGALUKAYOTDSYTSBTPKHOCAEZVIEMQGGCAOCYSNNXLEYDBTLYDEDORKCCVVMQRFKSDGHOXRSMBIHWLKIWBSDZGIQHZDWJAMSMJWTKCUTOWBAIFXDARKHDPJSUIHVLIEOOONXWXLQZUOTYFTJYCCHFXIFQYLMCPEKFEKHFKHRZBHGWEXRQAFAMPDNGQMGEOYRHSYLVJWYFIMWRDWMFNIFTIQGCGUVNSCWSTFSPHZVLKSQIASSTLRSRMLDFUHEVVEPNDUOHOJCUYLZLGCABFELBOITQYHDFFFJYWRPYUTZGSNQWRVMMBWHTDLCTGGOKEDPQKLYJLPHUFEZBKXTGVUUMSCELDIYEXFKUEPGKPSPZFRPKXBDGKCAFSWGLMXBXONFWQIPGTAYCLQZZNSMGGLHMLOSZVGQMZWDROLMEAZJVYIGNRVSZZRLTMMALBSQTONOTTSSMJWSPLRAJBTXLERZLNXRZJUVXYSEZLQQXMDVQENUBIIGWYFBIKKKUFGNYRMFEQSRVKMMIOHCOEUALTSEPGARHDVGZXYJGIPHCUBGTRBZZASNSKUXSXANGRZTFZTAMOCKPTQSJVGIRXVQEEXCTHHBOVQCBLTEKYILVIEGSNEDFMTBVTIDLLGHEWQUMJFDNWEORWDTNHGXIRVTJVNXRARTXLKFRMPRVEFHNPXFMRVGUQVBWTDCJBNUNHZWMMQQBIPFEAIVIHFZGUKWSHSGJDLROSDNYNPSBVSOIFMQKSYMQRCBVSLBYLUTLALHUTQBSDQDIFQWCHWVSVUZBAWTHMCNYXMVUCVLZLSJZPGUQZGDHTCQYRBCWNSRQNIHJBZZISQEUOHIHBDTMEZUFWLFZRYXESRMHAZOYCHNBCKQNTXVXMYXTAWOZOGTYJTATYMDBNPYESMUZMZZSEZVCHYKTPFAUCFJZRTAYRRSEXPOXTEIJKGEKLSOQQCHUAIOKKBBWBNRXYKXVBDZQTNIZGOBFPSHCNZLFSSNOHPVLUZRIJKDNCKDFUXAQGTMSDEYAYLCVBXMSTFQRVJEDUXUSOEWNKJDPSMSDIZSIJIZLDREESQTQGCDYXFHBWBZSWGCBXQIKGXMCKJATBWCKVSVETZRLJUZLXNFJXJRVQNSXFJQIYSSQPSUAAZWGSSTZEMHHXUOCVRTWBFREMLUJNFKOUMVIIZTPMBQIMVYLKFCOEWOTHSQABNXCWMRKFDAURYZQXTNDFCMMMCYGLTZHRYECCYHIAAVMINYDYNXFFBQBGFLEJDASGUVBOBIIHOXYCCLUXLSBCBYSICCJXBMMZYMOOPMRJGEIWUXKUKRWMYQYDGBUDXLAIHCEIXORMMLDFFZKIPIYUSPBASHCENBELSIEIMYGFFFLYFQXTJCVCUEJBCSVTTGPZMKCFGASBLZTJDKFJSRHJIHAPXAPNWORJSNXKUZLOJUFESAWUZUTLGKQLOTGGBBADJLDVMXSPLVOANEQUVJOEYUSDTKIRTXSHQEMXRITNLLYYYCJLAYJXJATKZWMODQONSPTNWBARPCGMAGQHDTTBQCAQUQJXTPIBMRNNFHQENVMXWDXJGHTWLOLEQILHRFGRWVEZWGDYQTODLFSDLHYXMITDFEYFQDPAHTMCKXIQMWRQQYJHGRAWSOWKUBJGOKOFPWLIQJKJBHHOLDMRADBXBPBKXGEJGWYEABLITRGYYPMEDNNTMZVGLSFWAAMIRZVTHKCCXDDMNDWDCJERGFRIPLNLMRDHMNNFNSIJQHIIRERVGBOJKRVVFGETGKZSPWAJODNLTYHSCRDEJWBDCNQITWRQBDYTQOLTCKCKJGRVOWDNWMFFJGLMNEWYNZSHCYZECUXTQLTYGFTZCVDOHJNEFCDAZXVBRLXEMXZZROPWXCJQKOWINYQUISNITSYDWBSYNUVCAHREBXLCGIXZPETZLZXBXBPXXWDUHYMOIJUQKEULZEYIUYCTCUKLALAPDNVHWGTHHWYITZPJNNAYAEZKFNQEOHIJNFJFMOHPKUSLKHEVANOYMZUWVOEVTTMIEFBIVRTZVIGGWBVZXELKJUFEXYWWHIMECYFFYXDWLWOJLICMRSXJAIIMDLJKBLVNWOTMSEDJOZZITLXHLNHVEBWYNNVRXHZRQNBTYRXACNKVIXRYWEQCSXWINYZRPSNHNIHLRAYPDATUTQCIEZJBLWUFNRWSIPCEEHOQCZNDRWBZVCBPRYBJWJUAOHGIIYRCPVNUXQQGGSLQAYHZSRBITDGYOMODFHAGTVOOZBWQRBHBUJDERLKHLNPSQTQAMQDUQAAKKHBUHUTQZPNPKBCTQVSFNHTREZCZXBLRFLMUNPCETIZEDMPVZCPBKMDJWHJCUBQTVGZHASBYOPGINQFSSDLSNAWFRTQKFZIJSEYFPZBZPQMIFRZGKSEYEPUBJCILTPETIFMZRUJWNRDFDHDJHGAOZUFYLZXNNYROHBNKNQZNNHMWAXNQGLLBFFBDFNQIXBRVKHRSJAQUAGUKYRJYPOAMDLUBEMDVLLQLESZFMTXGTIIEVSWOZDOHTBZVSFISDXXAGFAPOVTUUMTNYFCHUDZTYXWDNWTQDNQALYENYBSAHFNIOYDWKWRLIXRHTZLBDMQKSYFWMKCFGOPOPJZRHZHJEIUAIEZGLOKPRQQZJEHRYJKVILXYTLFHQCCEMZKYQYAAIVELHKXCXFUPFLQHYEWJKYVLBJHDUETIEAGJELIPLCQNVFSWLAWUPRCBLSITAALFIYVXJMEVOKFOYLUTXPXNFABZXSZHYQGNIQCRJOSYOPTZCYZINJPTIWAIBJHSHUWDUEVSIPRWLUUSBLBTYYXBLWZNPYKZTSTRNYJUPEQJGHPOIKRYISPLXUOWCMKPJOODEDCKRYKDDNNBYVKECBRXJNPPIUEPWHGJFGAUSGBAGXU',
    },
  ];

  tests.forEach((test) => {
    it(test.name, () => {
      const inputs = [];
      let output = '';

      // simulate how this will be used
      for (const input of test.inputs.split('')) {
        inputs.push(input);
        inputs.push(null);
      }


      const outputHandler = (o) => {
        if (o !== null) {
          output = output.concat(o);
        }
      };

      const {rerender} = render(
        <RotorAssembly
          input={inputs.shift()}
          outputHandler={outputHandler}
          reflector={Reflectors.B}
          rotors={[
            Rotors.EnigmaI.I,
            Rotors.EnigmaI.II,
            Rotors.EnigmaI.III,
          ]}
        />,
      );

      for (const input of inputs) {
        rerender(
          <RotorAssembly
            input={input}
            outputHandler={outputHandler}
            reflector={Reflectors.B}
            rotors={[
              Rotors.EnigmaI.I,
              Rotors.EnigmaI.II,
              Rotors.EnigmaI.III,
            ]}
          />,
        );
      }

      expect(output).toBe(test.expectedOutput);
    });
  });
});
