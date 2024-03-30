'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b7403edb915e214c773cfb2310544f60",
"assets/AssetManifest.bin.json": "f2cd035243e9967b6cf9132621d225f6",
"assets/AssetManifest.json": "b6d376864b89822f20ed5f3361ebba14",
"assets/assets/alisa/move_commands.txt": "1f17f505d95a35e263866072f419af24",
"assets/assets/alisa/move_commands_en.txt": "d206cfcfd5fb8ddc0149fd3d4cb6c543",
"assets/assets/alisa/move_counter_frames.txt": "e3207ce57ad97a15668c93cf5f76e5e4",
"assets/assets/alisa/move_damages.txt": "32c6a43191c37eb138c283a9a985cd70",
"assets/assets/alisa/move_extras.txt": "c3de9b5c031bc168b7381859bbc47a73",
"assets/assets/alisa/move_guard_frames.txt": "3a55fe337525918770a3f1273a4ae78a",
"assets/assets/alisa/move_hit_frames.txt": "81378a57cf1c6868703b89c7df61f6db",
"assets/assets/alisa/move_names.txt": "9bb58312714491d027e9d6405e05c6c2",
"assets/assets/alisa/move_names_en.txt": "63816628e3da4bd8bf8be0894ad0722f",
"assets/assets/alisa/move_ranges.txt": "fcefc9231b5e50d7d30d10ce3f341a6a",
"assets/assets/alisa/move_start_frames.txt": "16ac993871d705339cc31393f2d64bfc",
"assets/assets/alisa/throw_after_break_frames.txt": "ad13ebae5d770375f43375a88509bfd9",
"assets/assets/alisa/throw_break_commands.txt": "1178ca9b926bd0d085664995ab4eba67",
"assets/assets/alisa/throw_commands.txt": "9b7724d9ba0e6dd3aa15d1a9e18b7b25",
"assets/assets/alisa/throw_damages.txt": "b6d9246e4dcb1e34cc073656d56765a2",
"assets/assets/alisa/throw_extras.txt": "8e9e2e8cc786e547e654c85fb94576df",
"assets/assets/alisa/throw_names.txt": "b348287553f31a7ddafbc646177f590e",
"assets/assets/alisa/throw_ranges.txt": "72185435180e4e2278d67ba4a68c99d9",
"assets/assets/alisa/throw_start_frames.txt": "330130ffe4279de610f5eb1975baedeb",
"assets/assets/asuka/move_commands.txt": "8fe31a27dd7c4c01755ef37297a0e30e",
"assets/assets/asuka/move_commands_en.txt": "89b92af227ef31dff4e642a04f0ed84e",
"assets/assets/asuka/move_counter_frames.txt": "62b45b969e9d7bba5ed5df7d64301583",
"assets/assets/asuka/move_damages.txt": "27a96fafa6fec871f4240d79de1530f3",
"assets/assets/asuka/move_extras.txt": "f4e3b42d8e4449761c35117937145f12",
"assets/assets/asuka/move_guard_frames.txt": "e144289bf674b16b24bb2cb03843b121",
"assets/assets/asuka/move_hit_frames.txt": "b87144929d22b756f915ba9041d13ce8",
"assets/assets/asuka/move_names.txt": "b5a0065ff2798f9bf3b2eb1dfddfc609",
"assets/assets/asuka/move_names_en.txt": "f5ccfb271002ce003534e51d92b4e0ff",
"assets/assets/asuka/move_ranges.txt": "c19a9198e776e32b6833c5fcd62e594e",
"assets/assets/asuka/move_start_frames.txt": "454e8902acd6b086959893e0cf18cf0b",
"assets/assets/asuka/throw_after_break_frames.txt": "b3d565c5e2899ead843633aada04a3ba",
"assets/assets/asuka/throw_break_commands.txt": "7df9492224733496b5ca46da985617bf",
"assets/assets/asuka/throw_commands.txt": "16b4999b6b36c5f2242bca3844b63fc2",
"assets/assets/asuka/throw_damages.txt": "02fdc1ee607e5289d3dab630dcc38163",
"assets/assets/asuka/throw_extras.txt": "d4d32ca28c47e7ba25e96cdc91fa21be",
"assets/assets/asuka/throw_names.txt": "d176ab2985110dca86bed756d160baec",
"assets/assets/asuka/throw_ranges.txt": "d19b92ce5919328f5feac44a233913c3",
"assets/assets/asuka/throw_start_frames.txt": "220991076e701328ca42230ac0c27db4",
"assets/assets/azucena/move_commands.txt": "2a62a999b08f59b32430e99421556db3",
"assets/assets/azucena/move_counter_frames.txt": "1a28505e6188a064ae054e165c4e3ded",
"assets/assets/azucena/move_damages.txt": "e12005a77bf83f8e7895e95139dace17",
"assets/assets/azucena/move_extras.txt": "d48173053da256c7e9777b37930175c8",
"assets/assets/azucena/move_guard_frames.txt": "a7f94d2d4a1ee72931107b5e6ab4982b",
"assets/assets/azucena/move_hit_frames.txt": "644a042e7cec20a32be278c6d9663d4a",
"assets/assets/azucena/move_names.txt": "43445335832ad10587cc13dc2c4a4324",
"assets/assets/azucena/move_names_en.txt": "d4308b3870567763213bfc4d6fcd4b0f",
"assets/assets/azucena/move_ranges.txt": "e359af496b90cb7f9961315d38ccee89",
"assets/assets/azucena/move_start_frames.txt": "e881d6d48856fbe4aacda70c72100057",
"assets/assets/azucena/throw_after_break_frames.txt": "53e4b4fa48bdeb9e6b99b424ade171b5",
"assets/assets/azucena/throw_break_commands.txt": "7029d2d7ebf2fa4bd02dbb148c69d606",
"assets/assets/azucena/throw_commands.txt": "bc97da176c3260809e3950eaff4b3f3b",
"assets/assets/azucena/throw_damages.txt": "8273f342cd71d6981d14d13f37a75413",
"assets/assets/azucena/throw_extras.txt": "7ea63bdbdc9fb011b43b0981224b79be",
"assets/assets/azucena/throw_names.txt": "972bf372a771751c02cd207f476b2ec8",
"assets/assets/azucena/throw_ranges.txt": "8bd24acf6acc1077ae5044ccbe16d317",
"assets/assets/azucena/throw_start_frames.txt": "888ed4be262bc79ec05a47e1b54af380",
"assets/assets/bryan/move_commands.txt": "8d3eb80fd39ac060ceca5819ff4e8c6b",
"assets/assets/bryan/move_counter_frames.txt": "d8b9bd92d773855cf9efa8583b3c9a08",
"assets/assets/bryan/move_damages.txt": "a0b4cd2b358c1e3f3fa10c1cb6034b3c",
"assets/assets/bryan/move_extras.txt": "7c522cbc8a03196501d95c47121896ee",
"assets/assets/bryan/move_guard_frames.txt": "01451bd3e4e42b07ea65ab8d320678e6",
"assets/assets/bryan/move_hit_frames.txt": "d1ab68c0442a221ee442369394a045e1",
"assets/assets/bryan/move_names.txt": "663af5624246d5061d161cec90bed0b7",
"assets/assets/bryan/move_names_en.txt": "318a1eb2626e5c8704bf360819b6a27c",
"assets/assets/bryan/move_ranges.txt": "9d56b9a30a43154ad8efd3004f947ae9",
"assets/assets/bryan/move_start_frames.txt": "7d21e73dd604a53d432fb1e4305c1199",
"assets/assets/bryan/throw_after_break_frames.txt": "da898563ed36c9fe3d0fc6ce3eb6922e",
"assets/assets/bryan/throw_break_commands.txt": "2237402867837c376a5a59a560b75708",
"assets/assets/bryan/throw_commands.txt": "dcd64b0e4b18d003bd56892ccfddc736",
"assets/assets/bryan/throw_damages.txt": "92ba89cfe81cf48dc6aa17cbd8444c68",
"assets/assets/bryan/throw_extras.txt": "55c22d37e70f6e6824220a15574fd0b6",
"assets/assets/bryan/throw_names.txt": "9687e80e4d7b6e6fe0897d9881c45e3a",
"assets/assets/bryan/throw_ranges.txt": "2778a8a36a1f0ed0364f010c65f38649",
"assets/assets/bryan/throw_start_frames.txt": "c2b7a645c547d708b477cd24fd07a480",
"assets/assets/claudio/move_commands.txt": "9f6b26a36ffc2da6f14da42b452ed59d",
"assets/assets/claudio/move_counter_frames.txt": "cd1f92003a2eaecd3786594f29b8a111",
"assets/assets/claudio/move_damages.txt": "1f539a27e624ecff8e776b7b5b919f84",
"assets/assets/claudio/move_extras.txt": "26fd4fa324d07c3151a4f8e7df760fcd",
"assets/assets/claudio/move_guard_frames.txt": "ae0790ac557d0cbba780550ce729875f",
"assets/assets/claudio/move_hit_frames.txt": "6a03db49e28c92759b770063a96852dc",
"assets/assets/claudio/move_names.txt": "74025626a55f5c9046f709d52db42b4a",
"assets/assets/claudio/move_names_en.txt": "1faf04d78a8d8d4e31db8a69fe4e2201",
"assets/assets/claudio/move_ranges.txt": "70a1ae833cb1800e37c60852f924a9d1",
"assets/assets/claudio/move_start_frames.txt": "4afbb021de2fa3c4119d84a4dfaf54d9",
"assets/assets/claudio/throw_after_break_frames.txt": "cec92fb83fe3257e1d88384818cd737a",
"assets/assets/claudio/throw_break_commands.txt": "62bb20c5b4ba363e2254c77b72f399df",
"assets/assets/claudio/throw_commands.txt": "e24f7eebeb17edfe6d00c72a78cff873",
"assets/assets/claudio/throw_damages.txt": "5b044604528ed8465f3b2c67197b3e92",
"assets/assets/claudio/throw_extras.txt": "948e30f1c0a2a1c25a2d734fa5f9d4f3",
"assets/assets/claudio/throw_names.txt": "359cbede415c3a076e4e1e50dec2cf37",
"assets/assets/claudio/throw_ranges.txt": "45598fab8fb27235678ae1c703c1a65d",
"assets/assets/claudio/throw_start_frames.txt": "581d93a369ed40c3e671c637c2983a01",
"assets/assets/devil%2520jin/move_commands.txt": "525fe6238341ee330e57c22ffd4f57e3",
"assets/assets/devil%2520jin/move_counter_frames.txt": "05b00f3a6b21aa5536426c581d50c3de",
"assets/assets/devil%2520jin/move_damages.txt": "1a2e87e2ef43fc5c3613fe61b50ba695",
"assets/assets/devil%2520jin/move_extras.txt": "1b86c85d6b34f649fdcd3274d82c2584",
"assets/assets/devil%2520jin/move_guard_frames.txt": "5e06d389d383e3d6b80e080e661f985f",
"assets/assets/devil%2520jin/move_hit_frames.txt": "5eb5498fbd6f8c900c1b6e576ab67eb2",
"assets/assets/devil%2520jin/move_names.txt": "7d95212d3105015b594ee4a30a2eebbb",
"assets/assets/devil%2520jin/move_names_en.txt": "e4722cd7a1bc8e0aa9010bdcaedac18e",
"assets/assets/devil%2520jin/move_ranges.txt": "8619be5dfc7498ea9e2bf510e9be19bf",
"assets/assets/devil%2520jin/move_start_frames.txt": "f7583b994edd7229d1fe5c9ff01d2b0f",
"assets/assets/devil%2520jin/throw_after_break_frames.txt": "f8a206db8de68fb43d13c86cbc67cd7d",
"assets/assets/devil%2520jin/throw_break_commands.txt": "93a5c969f55e2b846bf09bece2100026",
"assets/assets/devil%2520jin/throw_commands.txt": "f77d742eb7e0a6ff663277e692e98200",
"assets/assets/devil%2520jin/throw_damages.txt": "25f86e1774832ef4e99c78adadeb3559",
"assets/assets/devil%2520jin/throw_extras.txt": "7b50526c24d8ae19f6913797ed6ecd41",
"assets/assets/devil%2520jin/throw_names.txt": "ca79210c61eeff0046aff941830f7eb9",
"assets/assets/devil%2520jin/throw_ranges.txt": "93684252fea95a1660752e794791901e",
"assets/assets/devil%2520jin/throw_start_frames.txt": "226cab78fae0114e63e47bd1f785647e",
"assets/assets/dragunov/move_commands.txt": "5c9d8c03cd479af529d446e2b929f250",
"assets/assets/dragunov/move_counter_frames.txt": "beb45ec59a6542ca2af2830461d80869",
"assets/assets/dragunov/move_damages.txt": "0f60ccc4cf5a686194ff74ed7a76561f",
"assets/assets/dragunov/move_extras.txt": "363bb3e79b1c61a8b5cb6e4c6a901073",
"assets/assets/dragunov/move_guard_frames.txt": "cc5b24871a87132eda0a75315fbeb56e",
"assets/assets/dragunov/move_hit_frames.txt": "bd261a2543e256bfb06b98160874e1be",
"assets/assets/dragunov/move_names.txt": "380f79ec6935f5fb2f7e21e6305b7a7d",
"assets/assets/dragunov/move_names_en.txt": "35e5fb75cf733535c162c0289a95883b",
"assets/assets/dragunov/move_ranges.txt": "aba995e583e22b7e89e3e320310c7fbf",
"assets/assets/dragunov/move_start_frames.txt": "810db0554eec0a08e451bd777d2facc7",
"assets/assets/dragunov/throw_after_break_frames.txt": "e5d03f3a0aecf74ab6bb38d849b0bae9",
"assets/assets/dragunov/throw_break_commands.txt": "e00debaf7555d58b069051e3436f2f29",
"assets/assets/dragunov/throw_commands.txt": "83d7844e224ce38e35ee33f2f32ebd62",
"assets/assets/dragunov/throw_damages.txt": "5fabb805107f856ea40528d2ddea9f6c",
"assets/assets/dragunov/throw_extras.txt": "3305f0b0b6c88e79102b4de14b34c068",
"assets/assets/dragunov/throw_names.txt": "f2ff13e6920db5752c6ee472e3dba6b8",
"assets/assets/dragunov/throw_ranges.txt": "e817f8cc3cc20b0a4f18a51c12a11dc1",
"assets/assets/dragunov/throw_start_frames.txt": "440f2609be0ce652eb27aa95e9ba13e1",
"assets/assets/feng/move_commands.txt": "6f7575fe3a8842419f6173b27d655e63",
"assets/assets/feng/move_counter_frames.txt": "131a0ccd1cbb317215b9e0ef9621fbd1",
"assets/assets/feng/move_damages.txt": "4588538da10a6e81c2ec4fb4a6bfef67",
"assets/assets/feng/move_extras.txt": "65bad2f3595d8c81eec3a4ee48a909bf",
"assets/assets/feng/move_guard_frames.txt": "b620c98dc5c5ca01dd263c6841ec0706",
"assets/assets/feng/move_hit_frames.txt": "b959c3715a39ab8a4973a7aa35bd6374",
"assets/assets/feng/move_names.txt": "69dd12b2020b8a8d6da960505e0a4063",
"assets/assets/feng/move_names_en.txt": "2ed793ab75cb6610b7a2c231207c848f",
"assets/assets/feng/move_ranges.txt": "e4823ace09a6fe88fc1eb3e3dd6b7707",
"assets/assets/feng/move_start_frames.txt": "7ad2839115d6bc13decd9ec7277c3de3",
"assets/assets/feng/throw_after_break_frames.txt": "954cb8844d582615c9fabc8dc3c99e79",
"assets/assets/feng/throw_break_commands.txt": "ae74c61281072d6d8dea0691dde6af39",
"assets/assets/feng/throw_commands.txt": "8ee96b7725ff3569c39c94eb465f2d52",
"assets/assets/feng/throw_damages.txt": "bb1d5fcea421c37034702431bb5ec48d",
"assets/assets/feng/throw_extras.txt": "9f276e7ec7608b8215bcd0b0fafde3bb",
"assets/assets/feng/throw_names.txt": "a0ebc83cfcfdd5dc2ba2b853833318ae",
"assets/assets/feng/throw_ranges.txt": "2abca1e038903cacefdaca76cd587056",
"assets/assets/feng/throw_start_frames.txt": "9f77ef1827a9e260a1e6d1eba23b9047",
"assets/assets/fonts/ONE%2520Mobile%2520Bold.ttf": "79badd71ce490387bb296d5928e298cd",
"assets/assets/fonts/Tenada.ttf": "0ba8366fb06b6b4c2fe9d6b83ac85bcf",
"assets/assets/hwoarang/move_commands.txt": "7dd1f8c6d4b20e8d1e2f1db4a4dd7965",
"assets/assets/hwoarang/move_counter_frames.txt": "7382d7d7167f37c482ed2c5cb7290ccd",
"assets/assets/hwoarang/move_damages.txt": "f77e682429ac0121b52fedf2e72dd3c2",
"assets/assets/hwoarang/move_extras.txt": "3d208cd50cb0748fe152706ee5f05e71",
"assets/assets/hwoarang/move_guard_frames.txt": "aa8aa4606d96ecdca4669924a24d4c42",
"assets/assets/hwoarang/move_hit_frames.txt": "9136cddc47d6316865d3889027496a95",
"assets/assets/hwoarang/move_names.txt": "6ed87c45c2a08faf087f74188fceb843",
"assets/assets/hwoarang/move_names_en.txt": "d6aaba348ca7bd8a43255060abce5133",
"assets/assets/hwoarang/move_ranges.txt": "78d07a08a0a2135b2da6805a57f5113b",
"assets/assets/hwoarang/move_start_frames.txt": "82f803269baf0bf1f447400ae96725ad",
"assets/assets/hwoarang/throw_after_break_frames.txt": "0bee3a9b6fa3f9205d14dbe805ee975e",
"assets/assets/hwoarang/throw_break_commands.txt": "2a3387a5279b9225352ffed32fa34e34",
"assets/assets/hwoarang/throw_commands.txt": "e968a2842d7e0a131cf167d7826eeca8",
"assets/assets/hwoarang/throw_damages.txt": "31e28102f6d0fbbd5c3e0b8d6953afdc",
"assets/assets/hwoarang/throw_extras.txt": "f19a830a5cd959c9a9a55452d97cd8d7",
"assets/assets/hwoarang/throw_names.txt": "b04d2e30a0768ab59f6f6487bbdf8e19",
"assets/assets/hwoarang/throw_ranges.txt": "d6413c0c5a947d9ab87ff2eadae504e3",
"assets/assets/hwoarang/throw_start_frames.txt": "f678217c8f40a40692bfec97760f8575",
"assets/assets/internal/description.txt": "c1d26b55b385e27edc173dd95a1b8403",
"assets/assets/internal/patch%2520note.txt": "ab2b41896c222dec1c4b9e66cf8192ad",
"assets/assets/internal/v1.01.04%2520patch%2520note.txt": "1a5ef572f3d1e0cba73f0922014c18ba",
"assets/assets/internal/v1.03.01%2520patch%2520note.txt": "b0495fe29a788fe853b01ca923882d1b",
"assets/assets/jack-8/move_commands.txt": "a0d0193ab69d813b8506b5cf156a7dcd",
"assets/assets/jack-8/move_counter_frames.txt": "b836322ddf300e8234d2de327506ba49",
"assets/assets/jack-8/move_damages.txt": "a5a673ec243f8f203bed47534d274c76",
"assets/assets/jack-8/move_extras.txt": "9155d1eb61b50fa618db177f41d16431",
"assets/assets/jack-8/move_guard_frames.txt": "b2a2e0de38f0b77f5c84564f7333ad85",
"assets/assets/jack-8/move_hit_frames.txt": "cba96304f498bbfe0b024f08211a158d",
"assets/assets/jack-8/move_names.txt": "9d90e4128eb3067aff38f82ccdd33a69",
"assets/assets/jack-8/move_names_en.txt": "f47760d67e0d449e410dd7660dd025e7",
"assets/assets/jack-8/move_ranges.txt": "a0aa8bc6dd29bd643c8b6ae288fb59b0",
"assets/assets/jack-8/move_start_frames.txt": "a3d1eba0dc6266e47e7b8ebc69cba97f",
"assets/assets/jack-8/throw_after_break_frames.txt": "79d58b160197f370ebf43f13d5382ded",
"assets/assets/jack-8/throw_break_commands.txt": "a83c29f906703c9e945650d7711beebf",
"assets/assets/jack-8/throw_commands.txt": "b9127b1d7d0c283ff28676b04965df77",
"assets/assets/jack-8/throw_damages.txt": "debd68475f41578f00f52811e080c4e6",
"assets/assets/jack-8/throw_extras.txt": "e7e1fd7ffd12df66275a1976a2f7cb76",
"assets/assets/jack-8/throw_names.txt": "6967c87f3bec6db5457b75be6f4c998c",
"assets/assets/jack-8/throw_ranges.txt": "1114ead0576b16304ba1b468aa27d065",
"assets/assets/jack-8/throw_start_frames.txt": "7069c9df87b8262ef695546e412e6b2d",
"assets/assets/jin/move_commands.txt": "a4dd4766db38a1b3f55f524306165e3a",
"assets/assets/jin/move_counter_frames.txt": "ec1d6e95828c9ddfd8e8c09b7a647d67",
"assets/assets/jin/move_damages.txt": "abf0873594f1ee09db6d8e673bdc7df1",
"assets/assets/jin/move_extras.txt": "cb0082e35e948a5bb73c064126110d77",
"assets/assets/jin/move_guard_frames.txt": "619d2a3fb500a2e6df0611d2df420f81",
"assets/assets/jin/move_hit_frames.txt": "652f1c1834caaaf04c98e4477cae6c88",
"assets/assets/jin/move_names.txt": "9637971176b380c5ee8e536e9b375d13",
"assets/assets/jin/move_names_en.txt": "b079a473d8db3b44e39dc81e1901607f",
"assets/assets/jin/move_ranges.txt": "9c18b4f32ab3bd248216fee0c41517ba",
"assets/assets/jin/move_start_frames.txt": "b1623a5f4bfc02eea537bbeffcce2eec",
"assets/assets/jin/throw_after_break_frames.txt": "8e7b7de2e640367d603afff66e718904",
"assets/assets/jin/throw_break_commands.txt": "f8a1ad7c717891a83d7cce332e4f7652",
"assets/assets/jin/throw_commands.txt": "3ea71e9904dc3b83a8f882f27929fa91",
"assets/assets/jin/throw_damages.txt": "71f48f799d7b8b6047673714a5035f85",
"assets/assets/jin/throw_extras.txt": "aa997b154ee9db1e2dc277885eca16d5",
"assets/assets/jin/throw_names.txt": "b50ff052610c8f293d23b3bd6f9fd207",
"assets/assets/jin/throw_ranges.txt": "7dbfd2caf7506f87de6caf18cd4272b2",
"assets/assets/jin/throw_start_frames.txt": "a0b610668e937f6d7f975986b07f5ccd",
"assets/assets/jun/move_commands.txt": "2a6ffbba5009b7ab884717eb93ead353",
"assets/assets/jun/move_counter_frames.txt": "17eda386b2bec61cc3f9ac3cb4e44519",
"assets/assets/jun/move_damages.txt": "32d64273b7639ebed16d9fba060bb2cc",
"assets/assets/jun/move_extras.txt": "80fd2eda9216800dc0482d46b650a117",
"assets/assets/jun/move_guard_frames.txt": "de33e83d2cbc45e67835aeaaa2147202",
"assets/assets/jun/move_hit_frames.txt": "d8ad2a460445554af18c31c3ecb3e298",
"assets/assets/jun/move_names.txt": "0d8d6d061a8fa108ea2ff2cfd718db97",
"assets/assets/jun/move_names_en.txt": "fc51984eb27a93b4fea76a3d8e85bcf2",
"assets/assets/jun/move_ranges.txt": "f01ccb5ba5d95709f77b166e5ea97a83",
"assets/assets/jun/move_start_frames.txt": "07253b012d532b410d5ec2e8ba6be81e",
"assets/assets/jun/throw_after_break_frames.txt": "5e721bf8c1cd28a2c35c62670e503ebe",
"assets/assets/jun/throw_break_commands.txt": "89bfc80f6eeb44343907427c4bfc313b",
"assets/assets/jun/throw_commands.txt": "5876b158fcbaf7bfa7f328d86fa0f23c",
"assets/assets/jun/throw_damages.txt": "fdb3fc4d3d1f25887196c3de6b78f56e",
"assets/assets/jun/throw_extras.txt": "614ff580499f2068e889ade5b1123ffb",
"assets/assets/jun/throw_names.txt": "394543bc5cfb9293a5860eee7cfb7cdf",
"assets/assets/jun/throw_ranges.txt": "2613361ea94a18fa42ce9142c18b46c1",
"assets/assets/jun/throw_start_frames.txt": "ceb74b9f710fcef5808c32ca66a43486",
"assets/assets/kazuya/move_commands.txt": "85d7f4e863e96e08efe1aac1166dfe68",
"assets/assets/kazuya/move_counter_frames.txt": "9d56de91336ffbf1db56717f970e38f4",
"assets/assets/kazuya/move_damages.txt": "bd50b650701ffdd78671de82b8dd1efb",
"assets/assets/kazuya/move_extras.txt": "edd5f2de4d27c6bedc8655ed9611af03",
"assets/assets/kazuya/move_guard_frames.txt": "215226adc2ee58c7103e154fb5fdef3c",
"assets/assets/kazuya/move_hit_frames.txt": "1f39845ddb334a2ce99f4dcda2146de4",
"assets/assets/kazuya/move_names.txt": "f961d8b761fe32e9d01cf32634bccf55",
"assets/assets/kazuya/move_names_en.txt": "c2bc782b99dd848c32f69536fda21840",
"assets/assets/kazuya/move_ranges.txt": "94ea16d62766a4aeb4c051f8d53d8a20",
"assets/assets/kazuya/move_start_frames.txt": "30ec8fc8c2bab6edb8620f48306c3924",
"assets/assets/kazuya/throw_after_break_frames.txt": "a7de74871dc50f4e3289ab65a270029f",
"assets/assets/kazuya/throw_break_commands.txt": "2c74351c479b25a7704bf806b9150448",
"assets/assets/kazuya/throw_commands.txt": "ed125cc25faab4b50013aec78a1e89d3",
"assets/assets/kazuya/throw_damages.txt": "c0c595b55c5b1c0fcbb6be1b163603bf",
"assets/assets/kazuya/throw_extras.txt": "3107f58520c7dedb753de36dfde46e46",
"assets/assets/kazuya/throw_names.txt": "76be821871b3bcb7522fc10069460443",
"assets/assets/kazuya/throw_ranges.txt": "caf5e1572d46011fde8c084fd77e7a18",
"assets/assets/kazuya/throw_start_frames.txt": "ac73ce36f5412129262795cc119d3a0c",
"assets/assets/king/move_commands.txt": "00f2e8ae7aab51a03b3d84fd1b688e21",
"assets/assets/king/move_counter_frames.txt": "9257e7ed0faa175523e5089f46e0a238",
"assets/assets/king/move_damages.txt": "a4f38604b4249fc7f39a67d368825e51",
"assets/assets/king/move_extras.txt": "e8225d791df294728746643e54cf38d9",
"assets/assets/king/move_guard_frames.txt": "6e2dce18bae496b7b98414c41210b87d",
"assets/assets/king/move_hit_frames.txt": "790e0eb6fed0230e22e3641453940f71",
"assets/assets/king/move_names.txt": "ddc1a506db8f7e10ad7c7ffb2c1ac9f8",
"assets/assets/king/move_names_en.txt": "3f2ba685a4bfb18c2296e221cca56c57",
"assets/assets/king/move_ranges.txt": "7af9d96b5334e2d35d2901f8e8981943",
"assets/assets/king/move_start_frames.txt": "519c65a50bfef65a216544729a78c54e",
"assets/assets/king/throw_after_break_frames.txt": "32946d2f0e76e6b0a71305874e1a372e",
"assets/assets/king/throw_break_commands.txt": "b703eaea0a2f67702aaf900bf8e06682",
"assets/assets/king/throw_commands.txt": "0f0fd26740054541268ed3be2ce9ed3f",
"assets/assets/king/throw_damages.txt": "5ddbf4b2e6aab61445236862edce999c",
"assets/assets/king/throw_extras.txt": "ce287b33b47876f27b3a2bb9a8f1797d",
"assets/assets/king/throw_names.txt": "ca30556db3e6194dc804b9eff02da960",
"assets/assets/king/throw_names_en.txt": "6164ae9a9e7fe3c5b3d273be0f36c7ef",
"assets/assets/king/throw_ranges.txt": "312ff8b427363a436dcae69448644ba1",
"assets/assets/king/throw_start_frames.txt": "9ec8f104762aa0d88399d99a1bce174b",
"assets/assets/kuma/move_commands.txt": "62201c6939ce86daf946a55ffb7e828a",
"assets/assets/kuma/move_counter_frames.txt": "3b04cd4c74868e14adf24e124d84858f",
"assets/assets/kuma/move_damages.txt": "a3e96372b33453ce5dc4d5d06dd9bd25",
"assets/assets/kuma/move_extras.txt": "3232051e5d935e3ecf012091e5059dd1",
"assets/assets/kuma/move_guard_frames.txt": "79a8c8c3f174c8f6e56cbf5a12e040ce",
"assets/assets/kuma/move_hit_frames.txt": "32687d9f2896b91c3fefdb6cbb5a8f26",
"assets/assets/kuma/move_names.txt": "79963fd96412ce8d12afedd8181fa379",
"assets/assets/kuma/move_names_en.txt": "d2946478ef62f4a147939d587dbfed71",
"assets/assets/kuma/move_ranges.txt": "388c4d0ce030ac6813bac93d2b2a244d",
"assets/assets/kuma/move_start_frames.txt": "e6e0c29ce01e9c7953a1e9cf9bb94ed5",
"assets/assets/kuma/throw_after_break_frames.txt": "0bc1447ac61785c8bb5c9d503271a7d5",
"assets/assets/kuma/throw_break_commands.txt": "ae74c61281072d6d8dea0691dde6af39",
"assets/assets/kuma/throw_commands.txt": "6f2e18b036bb601d929a8a374cb9e845",
"assets/assets/kuma/throw_damages.txt": "41dc2ecdd649e22ff9563e776614c49b",
"assets/assets/kuma/throw_extras.txt": "c2f4812efe9641a6121b52888fb0fb60",
"assets/assets/kuma/throw_names.txt": "011d3bb81158ee6e6b57696bf2af49cf",
"assets/assets/kuma/throw_ranges.txt": "7dbfd2caf7506f87de6caf18cd4272b2",
"assets/assets/kuma/throw_start_frames.txt": "b063952ff11718b5aae56f7c99bdf35d",
"assets/assets/lars/move_commands.txt": "963024393f5a16e4e20544184446258a",
"assets/assets/lars/move_counter_frames.txt": "279b0adbc572372d130102558ce214b3",
"assets/assets/lars/move_damages.txt": "1ee2fbe1965ca8d5d194bd909e64aa4c",
"assets/assets/lars/move_extras.txt": "be44a9d0bfa9106dafa259cc9a5ba2a7",
"assets/assets/lars/move_guard_frames.txt": "0e5f6e003ebf9e17e288b279c3491bf0",
"assets/assets/lars/move_hit_frames.txt": "93b0fec11e60120bf1deee7c848680cc",
"assets/assets/lars/move_names.txt": "a6588643d6aaf2c2296629135e458783",
"assets/assets/lars/move_names_en.txt": "06cbc84b9c6edbcde1c89420e22980e9",
"assets/assets/lars/move_ranges.txt": "e70c1e94a80bb016ce1bf2918d14ac6e",
"assets/assets/lars/move_start_frames.txt": "2e9ff6144474ef155638af2c278c1c3a",
"assets/assets/lars/throw_after_break_frames.txt": "198e7935a951c8a046d925cfd0e8c632",
"assets/assets/lars/throw_break_commands.txt": "1178ca9b926bd0d085664995ab4eba67",
"assets/assets/lars/throw_commands.txt": "f4207d98774074e78431feead68ccf50",
"assets/assets/lars/throw_damages.txt": "0815d8c18a0c0f57f7749ccc13003fe6",
"assets/assets/lars/throw_extras.txt": "2082a8430c5295c06781af1cb5bbd347",
"assets/assets/lars/throw_names.txt": "b041044d5a8caae15f719ef4c55c3de5",
"assets/assets/lars/throw_ranges.txt": "deeeec0c224eb4c573a6cb1c8b83cd2a",
"assets/assets/lars/throw_start_frames.txt": "775864fb745899afb9e67fe0d2a842e0",
"assets/assets/law/move_commands.txt": "3f854cc2dbd2ea7235ee0f15421c2c6e",
"assets/assets/law/move_counter_frames.txt": "0baaaa7021f2d46455f851272d17bb63",
"assets/assets/law/move_damages.txt": "6bcd25fd430cd6452c2b66d267a3bbb3",
"assets/assets/law/move_extras.txt": "ef568dd827129567d4998a6703475ff9",
"assets/assets/law/move_guard_frames.txt": "861bfb80dbfce617494f04d43214db6c",
"assets/assets/law/move_hit_frames.txt": "41211acd52e42958bcc730023262a9c3",
"assets/assets/law/move_names.txt": "8d7318cd667c239001c3bd0085738297",
"assets/assets/law/move_names_en.txt": "4e4ec4be47e891d0c200910abc40f9f0",
"assets/assets/law/move_ranges.txt": "a94c066c1f7b057f22525bb966c3bddd",
"assets/assets/law/move_start_frames.txt": "e87b726afee9032b9ceabed155c0624e",
"assets/assets/law/throw_after_break_frames.txt": "35528d10f7776355adc01b9ac415d720",
"assets/assets/law/throw_break_commands.txt": "ed39da1e59963870faadb8374463b5d4",
"assets/assets/law/throw_commands.txt": "d9f22982a1575266b92acdd6116ac92b",
"assets/assets/law/throw_damages.txt": "51bcff4ef20e7904ee46ba566b7edce1",
"assets/assets/law/throw_extras.txt": "51e5013878f024d848445ae8fc0b6e25",
"assets/assets/law/throw_names.txt": "c651d2794b92586ce2cf543388a9af28",
"assets/assets/law/throw_ranges.txt": "8f9daaa6116dc198970034da6397b6ee",
"assets/assets/law/throw_start_frames.txt": "bc95bc8cc7768bf4611f5c1272563da8",
"assets/assets/lee/move_commands.txt": "3c9224a0cc1984c4360a8e7de8fd8ca4",
"assets/assets/lee/move_counter_frames.txt": "b2cb6d049cc54bb49a5fd1f66bd70fee",
"assets/assets/lee/move_damages.txt": "4a68f8dcba0e12b096efe59b474fb8df",
"assets/assets/lee/move_extras.txt": "813159e50bbaf5e642749f834e57588c",
"assets/assets/lee/move_guard_frames.txt": "7c87634ca9151d67be040503a9c18827",
"assets/assets/lee/move_hit_frames.txt": "14ef1053c4053867c3877f3dac36f803",
"assets/assets/lee/move_names.txt": "66e444a7ca7a03b732eb251500cc5c1a",
"assets/assets/lee/move_names_en.txt": "df57542eac2d9f7ed688acac83e969d5",
"assets/assets/lee/move_ranges.txt": "655c758c010202f3a345981d121836c1",
"assets/assets/lee/move_start_frames.txt": "021f089f76732e460f260080d8a7f1c1",
"assets/assets/lee/throw_after_break_frames.txt": "88d921fcba7e8701abdce12dbc793e7a",
"assets/assets/lee/throw_break_commands.txt": "c78283014db4e0becf121d3c5171d2be",
"assets/assets/lee/throw_commands.txt": "4f206891cc7065e5bb4e903b3f5d3185",
"assets/assets/lee/throw_damages.txt": "b02cf67b8973da073a81b3b5ca703e6a",
"assets/assets/lee/throw_extras.txt": "a0295a06aa53d574d53ca8b5027a645c",
"assets/assets/lee/throw_names.txt": "161e645a9ab87a909f5a7a74f61715ca",
"assets/assets/lee/throw_ranges.txt": "64a32ca7a234364718e5bb464b3c0e45",
"assets/assets/lee/throw_start_frames.txt": "860c94ff346f3c51891941b6e425cb0a",
"assets/assets/leo/move_commands.txt": "458bec64712196ae66f1561f69ef3d94",
"assets/assets/leo/move_counter_frames.txt": "f28f6af7b08cde7459ee4bcfb79821a4",
"assets/assets/leo/move_damages.txt": "8ebc23c81f69fbe748a9b205cca011bc",
"assets/assets/leo/move_extras.txt": "5bd91492c6e4848b41e9073ad01778fe",
"assets/assets/leo/move_guard_frames.txt": "0171ee71f6c23e67941e18c71884b7d8",
"assets/assets/leo/move_hit_frames.txt": "f048223a694951940b53f436f0d7ee2b",
"assets/assets/leo/move_names.txt": "e90c90db8e9fed5d18cbd579d6eb57bd",
"assets/assets/leo/move_names_en.txt": "e9721554d9d7ad39d2ea6cde3f41f37b",
"assets/assets/leo/move_ranges.txt": "9fa42deb29806dc76f8bd85b4d5c1f6d",
"assets/assets/leo/move_start_frames.txt": "89b83b4263ed38322c6fecd8d0ba40f1",
"assets/assets/leo/throw_after_break_frames.txt": "b0c3e6415ab80fb4cf4289bf309d889a",
"assets/assets/leo/throw_break_commands.txt": "385ba874fb1211c7869c9ce8a9a4b534",
"assets/assets/leo/throw_commands.txt": "b47e97b0a00ba7976ecf2388c260f174",
"assets/assets/leo/throw_damages.txt": "af52084869d45df267f746858b4e035a",
"assets/assets/leo/throw_extras.txt": "497e1e3ee3ae37967db89a4039aea856",
"assets/assets/leo/throw_names.txt": "195fbb048accfc91d715f8fb089774fe",
"assets/assets/leo/throw_ranges.txt": "b25829b6717d9053a5a1ffc9f4de94e0",
"assets/assets/leo/throw_start_frames.txt": "08103c59a4c92cb3f36c68a1d86fd336",
"assets/assets/leroy/move_commands.txt": "64b9c6644c5133e1662aca63b28a86ba",
"assets/assets/leroy/move_counter_frames.txt": "1a802497ff243715716d293d1c9fe380",
"assets/assets/leroy/move_damages.txt": "88d205dafde05ee0dfdca1602d9d4a74",
"assets/assets/leroy/move_extras.txt": "e36ddfe7ecfc3bcedc80f8269ecfcf99",
"assets/assets/leroy/move_guard_frames.txt": "788724b59a77ab9f497e8023ff9466a9",
"assets/assets/leroy/move_hit_frames.txt": "fac83c844912f878c4629b1097aac462",
"assets/assets/leroy/move_names.txt": "caa55b2644e5bbad918ee0c0f219c03f",
"assets/assets/leroy/move_names_en.txt": "d32ee1b651d22d0418189f4330574f08",
"assets/assets/leroy/move_ranges.txt": "aacb0f61f7aaf45773386ab58fc0c08a",
"assets/assets/leroy/move_start_frames.txt": "040028d7e21b8308c153105adae303ba",
"assets/assets/leroy/throw_after_break_frames.txt": "824c0d7bb4d4fc8156afe5d93b09d94d",
"assets/assets/leroy/throw_break_commands.txt": "db52ba92f2c6728f27e82e177440ba27",
"assets/assets/leroy/throw_commands.txt": "63d56a8c94c7edfa900077eb6ef882ef",
"assets/assets/leroy/throw_damages.txt": "8b28ffd7b77172f6e7c2060ec63ddf78",
"assets/assets/leroy/throw_extras.txt": "0db23977249ff30f2f0355645fcecdb0",
"assets/assets/leroy/throw_names.txt": "8b418308b9019adcd68dbc67ceb512da",
"assets/assets/leroy/throw_ranges.txt": "9b0dbb2d1eb7455c47fa74ae8f22b86a",
"assets/assets/leroy/throw_start_frames.txt": "80eb028667ba48c50c9afb236ee0238a",
"assets/assets/lili/move_commands.txt": "4182bd200bcb980a6624434639fe1dcc",
"assets/assets/lili/move_counter_frames.txt": "5916e3d4441ca15272a2480e1bc8f5d7",
"assets/assets/lili/move_damages.txt": "2b4f593013ff440662f2a6006ba844db",
"assets/assets/lili/move_extras.txt": "e2b08c540fe7a7738cd8047d550b10ea",
"assets/assets/lili/move_guard_frames.txt": "12bfb691f01d67e1b3b70480105aa6c8",
"assets/assets/lili/move_hit_frames.txt": "c82faca861ce86872f570d703731d6f0",
"assets/assets/lili/move_names.txt": "475a194462232ff082c18ef5d4351c04",
"assets/assets/lili/move_names_en.txt": "b939b02b1daae2220136ea15938826e3",
"assets/assets/lili/move_ranges.txt": "840bcd702d262b8b5baac168615898a1",
"assets/assets/lili/move_start_frames.txt": "df72df6382bcb0060bb81c3e94ddbb7f",
"assets/assets/lili/throw_after_break_frames.txt": "53dbfb26c2eb8b582e789652725b1e83",
"assets/assets/lili/throw_break_commands.txt": "c78283014db4e0becf121d3c5171d2be",
"assets/assets/lili/throw_commands.txt": "1a91206cca6e8c567648b0e19be2625d",
"assets/assets/lili/throw_damages.txt": "91e96974e8e03cd0009432d10ccd4e94",
"assets/assets/lili/throw_extras.txt": "dd9fe1413dd708a72b68dee06251bf68",
"assets/assets/lili/throw_names.txt": "0f7e50867491de9c40b91111963c9d29",
"assets/assets/lili/throw_ranges.txt": "40bdebdf948234f64b0c016b599644ec",
"assets/assets/lili/throw_start_frames.txt": "3b0eaedf5875c026c4d9333003db4b33",
"assets/assets/nina/move_commands.txt": "2ff31d7adc43887a98c45c457f847b36",
"assets/assets/nina/move_commands_en.txt": "9b4ae315c51dee848322cd8b2b17af73",
"assets/assets/nina/move_counter_frames.txt": "01d72905bd9d8a5d4c8013dc6ccb5219",
"assets/assets/nina/move_damages.txt": "1ce014c2312e956f28126e1e9fcd7cbe",
"assets/assets/nina/move_extras.txt": "f9e9f3eb215c3da867f212c20e15427f",
"assets/assets/nina/move_guard_frames.txt": "4c8891843bba69253d797f4456c6119d",
"assets/assets/nina/move_hit_frames.txt": "0363b4a7dbbb6c38cec48f3fa6c6c277",
"assets/assets/nina/move_names.txt": "ea3e045bdd917817866f643b4943dd62",
"assets/assets/nina/move_names_en.txt": "e162445a6075cbc37c5740ac0b5861e7",
"assets/assets/nina/move_ranges.txt": "80d821020cc681823c554dcccb7f09cc",
"assets/assets/nina/move_start_frames.txt": "de5353eb9e0869bc35fd0532ad688eca",
"assets/assets/nina/throw_after_break_frames.txt": "0b3b97e2fdf8b8f721be9ba5b146717f",
"assets/assets/nina/throw_break_commands.txt": "60702d241e05ebae2577f82eba04e640",
"assets/assets/nina/throw_commands.txt": "a4e9c1ca4db3dede30c723934bdcd716",
"assets/assets/nina/throw_damages.txt": "420e6524754bcb9c47ed99f7b5fe70bc",
"assets/assets/nina/throw_extras.txt": "3c9ea070cbc949e57bba0a6ddf6f881f",
"assets/assets/nina/throw_names.txt": "caea6291b1a70a8f156adf2e6bdcfd95",
"assets/assets/nina/throw_names_en.txt": "50def0e005da2bc57c60dd67a35280d5",
"assets/assets/nina/throw_ranges.txt": "f8ac284ff58df60a2c71f446a4bf144a",
"assets/assets/nina/throw_start_frames.txt": "f8892caf781a900ec46106570fcd631e",
"assets/assets/panda/move_commands.txt": "ba13b591ab69ee94181af9c80171f3f4",
"assets/assets/panda/move_counter_frames.txt": "d9e4ef1297463900da7a875fb834d48c",
"assets/assets/panda/move_damages.txt": "dd95dbb58565d2d20680a1731b526105",
"assets/assets/panda/move_extras.txt": "06fb0ea9dcb34777956aeaa6fd9534be",
"assets/assets/panda/move_guard_frames.txt": "c728e43810fdc26af3e86f0e823c1655",
"assets/assets/panda/move_hit_frames.txt": "50d5dd9a780680776f416cab9af0c506",
"assets/assets/panda/move_names.txt": "f1ae3a2e8beb6e32e00a6e5c84c70db6",
"assets/assets/panda/move_names_en.txt": "aa9fa5a1922e920cbcd4e48b379806cf",
"assets/assets/panda/move_ranges.txt": "6a4f6b3d1219eaf1d974c1ef3397fffb",
"assets/assets/panda/move_start_frames.txt": "91c8a918b5f595510649ca5c823bb41a",
"assets/assets/panda/throw_after_break_frames.txt": "0bc1447ac61785c8bb5c9d503271a7d5",
"assets/assets/panda/throw_break_commands.txt": "ae74c61281072d6d8dea0691dde6af39",
"assets/assets/panda/throw_commands.txt": "6f2e18b036bb601d929a8a374cb9e845",
"assets/assets/panda/throw_damages.txt": "41dc2ecdd649e22ff9563e776614c49b",
"assets/assets/panda/throw_extras.txt": "c2f4812efe9641a6121b52888fb0fb60",
"assets/assets/panda/throw_names.txt": "011d3bb81158ee6e6b57696bf2af49cf",
"assets/assets/panda/throw_ranges.txt": "7dbfd2caf7506f87de6caf18cd4272b2",
"assets/assets/panda/throw_start_frames.txt": "b063952ff11718b5aae56f7c99bdf35d",
"assets/assets/paul/move_commands.txt": "69caa373cbb691c8bab4ade07f59f22c",
"assets/assets/paul/move_counter_frames.txt": "41fa9feb8344b661078cbd1119d8b572",
"assets/assets/paul/move_damages.txt": "98c98cab14d195b912232e613c392486",
"assets/assets/paul/move_extras.txt": "981feecec1786b279bbe5c60accbfffb",
"assets/assets/paul/move_guard_frames.txt": "9c3148e9c9191d139c75c0010cd45dc4",
"assets/assets/paul/move_hit_frames.txt": "7b592ac21cf2fdc1f345d1529490a458",
"assets/assets/paul/move_names.txt": "a3f49352982c85f3d90b9354b30beb1c",
"assets/assets/paul/move_names_en.txt": "9d8df10709f8f6348247064ba3ec4cf0",
"assets/assets/paul/move_ranges.txt": "45eae0b5b8e9ffbcd325e973fce73eb0",
"assets/assets/paul/move_start_frames.txt": "ae9cec216d1fd90e8d85a17fab7c426a",
"assets/assets/paul/throw_after_break_frames.txt": "8a3304c77ba04f06b7a6b74a67588759",
"assets/assets/paul/throw_break_commands.txt": "22e55980fe1940c4ac0be207e9fe8f40",
"assets/assets/paul/throw_commands.txt": "478988ec956027db9239c484fe163f01",
"assets/assets/paul/throw_damages.txt": "ddbd0b7def6ba383e079afe6351fa68e",
"assets/assets/paul/throw_extras.txt": "c66d6d7f4b0231f948417808ef88f7f8",
"assets/assets/paul/throw_names.txt": "307ec40d49bdf3f79aec992933387bcb",
"assets/assets/paul/throw_ranges.txt": "753d39381e98d29edc32504ef95f0e2b",
"assets/assets/paul/throw_start_frames.txt": "a633d3be538995379609de37cbb38f94",
"assets/assets/raven/move_commands.txt": "bcc43419e3586cd3c2b7c1a50191ea7f",
"assets/assets/raven/move_counter_frames.txt": "6c7a6ef62250552959314dc8a0055cf8",
"assets/assets/raven/move_damages.txt": "0acf8fd0162566b184daf439dc73ede2",
"assets/assets/raven/move_extras.txt": "97d52ca7366ddc4d2c48ea31e0cb87be",
"assets/assets/raven/move_guard_frames.txt": "e996e447bfc7f8b92a9e92b7afdc7113",
"assets/assets/raven/move_hit_frames.txt": "6380fc4f4a4cf7508bb6db3a64042c53",
"assets/assets/raven/move_names.txt": "ae3a7109c8c6da812f75ef03f74aa14e",
"assets/assets/raven/move_names_en.txt": "c90d1b4f0c1d4f290af632910d3e2f7e",
"assets/assets/raven/move_ranges.txt": "1b1692a7ec8d65598125e104ef5f6208",
"assets/assets/raven/move_start_frames.txt": "aa1be7ef42a7be7e54e445b5743fbd24",
"assets/assets/raven/throw_after_break_frames.txt": "15e2d395ff17242d73bebce680a268f4",
"assets/assets/raven/throw_break_commands.txt": "4e7fddc270d824d2d9eaa4fd290b325b",
"assets/assets/raven/throw_commands.txt": "29b90feb7fb7a95532676c9e514b1cb7",
"assets/assets/raven/throw_damages.txt": "074eb6198006c0322b8a4f30abf3eee7",
"assets/assets/raven/throw_extras.txt": "4a5b459e09ea9adab488e2b8d98d805b",
"assets/assets/raven/throw_names.txt": "a1c39c9c4751b569f3ed0e011f602bc9",
"assets/assets/raven/throw_ranges.txt": "2abca1e038903cacefdaca76cd587056",
"assets/assets/raven/throw_start_frames.txt": "1df5ecb8268b44c9c6f8da12243e4caa",
"assets/assets/reina/move_commands.txt": "dd8f45f1f6e30edaf6b4c78929211367",
"assets/assets/reina/move_counter_frames.txt": "29f9312c6cc15b0799903072ada057d3",
"assets/assets/reina/move_damages.txt": "c354358b652d8bcdcacb50187aec97b7",
"assets/assets/reina/move_extras.txt": "8d974644e053845e7de191af3c023e7e",
"assets/assets/reina/move_guard_frames.txt": "dc50f4bb2f289736cc5430d317a5c686",
"assets/assets/reina/move_hit_frames.txt": "0846a82d726b99dc0e87c19405c88772",
"assets/assets/reina/move_names.txt": "0bd9e8a55e745590dd38015b3e2f60f9",
"assets/assets/reina/move_names_en.txt": "c51dc774202028fd2236f0d461061c6e",
"assets/assets/reina/move_ranges.txt": "79b4b79dbf64ea87b4d9b412dcd8969f",
"assets/assets/reina/move_start_frames.txt": "5d6b734cb9455dca0595c15a3052a13f",
"assets/assets/reina/throw_after_break_frames.txt": "d1d73fc7905355f6c59fff2befed9788",
"assets/assets/reina/throw_break_commands.txt": "6a2f4132f566453f45057e07e99c24ab",
"assets/assets/reina/throw_commands.txt": "3233b8595ee5bfdff5b588074b6f9d0a",
"assets/assets/reina/throw_damages.txt": "ce502f22f99ca61f2a1d073310b42a78",
"assets/assets/reina/throw_extras.txt": "003b57691940b438ca4e99bdc8a005b2",
"assets/assets/reina/throw_names.txt": "38912bf8b42938e55e3540572d57fd81",
"assets/assets/reina/throw_ranges.txt": "74d7ec2bca56dbb5a64d6b01ecba0f5e",
"assets/assets/reina/throw_start_frames.txt": "52736f8e8ecf4cb6ece849a3cd81cd32",
"assets/assets/shaheen/move_commands.txt": "dbe9682492ed03d3bbd1bef3592770ea",
"assets/assets/shaheen/move_counter_frames.txt": "9e4e979a2cce0ec617c6360415d39a6e",
"assets/assets/shaheen/move_damages.txt": "896224acb8681e4a076801e089013ce6",
"assets/assets/shaheen/move_extras.txt": "af778a3a877b3d9565145724e54e89b7",
"assets/assets/shaheen/move_guard_frames.txt": "30001cfa6e28aedce03999b32c8d3912",
"assets/assets/shaheen/move_hit_frames.txt": "3df6ee16f9ad4c8c9e5682d206a1e81a",
"assets/assets/shaheen/move_names.txt": "dfd1e344d497df6d0891e091abf0dcc7",
"assets/assets/shaheen/move_names_en.txt": "e0e137b9b64e685cff5444b2d0dcc11d",
"assets/assets/shaheen/move_ranges.txt": "4bf0fa74fa368f3ee8309c94727d2f95",
"assets/assets/shaheen/move_start_frames.txt": "993e860277747adb17b18a30e5ce1c9c",
"assets/assets/shaheen/throw_after_break_frames.txt": "133d2f471096026224b87e6a35e53024",
"assets/assets/shaheen/throw_break_commands.txt": "d033f5a128492bccf4d7425a2c790431",
"assets/assets/shaheen/throw_commands.txt": "721739d7340525aecadfcc6482543c6a",
"assets/assets/shaheen/throw_damages.txt": "3f37d7815e7b537b6eca621b3f483b27",
"assets/assets/shaheen/throw_extras.txt": "5e1873040fb44e0008f2fd695f7942e8",
"assets/assets/shaheen/throw_names.txt": "37c68e0cbc591d930bb3db5bc4be697c",
"assets/assets/shaheen/throw_ranges.txt": "8603309146416052957985746d7ef208",
"assets/assets/shaheen/throw_start_frames.txt": "ecd48238224bd0e8f7abd7bb9ba89be1",
"assets/assets/steve/move_commands.txt": "f1dd4b0f21e1d4838005ae20d2371494",
"assets/assets/steve/move_counter_frames.txt": "84988aa8d41d3b56bd23766cfeb943bc",
"assets/assets/steve/move_damages.txt": "83b71064627a68bedd0b9dfd462d1f89",
"assets/assets/steve/move_extras.txt": "a41098c68254d1884291f79f61a7c3ab",
"assets/assets/steve/move_guard_frames.txt": "57c3c0106c00ac18af0d4a193c1285ec",
"assets/assets/steve/move_hit_frames.txt": "8553357d16824ef58eda810323b743b0",
"assets/assets/steve/move_names.txt": "2a936d4db6a4bcb222469b2393f14a20",
"assets/assets/steve/move_names_en.txt": "43d2c9710e4cbdaade6ec65827b612c9",
"assets/assets/steve/move_ranges.txt": "fabd81534e2db78015b135a8d666686a",
"assets/assets/steve/move_start_frames.txt": "d3eefed7c4cca0e9d18082862cb15879",
"assets/assets/steve/throw_after_break_frames.txt": "49a62db2e6157f3b82463a5d5a1114b3",
"assets/assets/steve/throw_break_commands.txt": "a325373d4167c791f8483976e21327a8",
"assets/assets/steve/throw_commands.txt": "884a28854db0c5a2b90ebeab828ded52",
"assets/assets/steve/throw_damages.txt": "1b77d862c23fbd69ec288eb6098b443a",
"assets/assets/steve/throw_extras.txt": "e98b59c2d0ff7db640bd0de45e2758a1",
"assets/assets/steve/throw_names.txt": "3987ce2bd46c98ddbe9e94bb0fd22b2a",
"assets/assets/steve/throw_ranges.txt": "5141228bc7019863921a26c525e94014",
"assets/assets/steve/throw_start_frames.txt": "4108c035c50ee730d2291f334dbc8117",
"assets/assets/victor/move_commands.txt": "629d7282d01db0264bacfc8f96185018",
"assets/assets/victor/move_counter_frames.txt": "9bba60275f2f3df111aedc82ff7fbc2f",
"assets/assets/victor/move_damages.txt": "2127ab5b9841afddcfaa97c1efe8395b",
"assets/assets/victor/move_extras.txt": "200c599db97dc36d4cefca3b3d5f0e9a",
"assets/assets/victor/move_guard_frames.txt": "3931e1d19b6bc2ff2e5feb11e9edb129",
"assets/assets/victor/move_hit_frames.txt": "cb383d44fe6ded40181ea113153dbfe8",
"assets/assets/victor/move_names.txt": "da16205beb41f221100d171f590e4bac",
"assets/assets/victor/move_names_en.txt": "0dd15d08d7077844d7c4f5255be10c86",
"assets/assets/victor/move_ranges.txt": "d2497416a8347b402fc7f54504477bbe",
"assets/assets/victor/move_start_frames.txt": "7ccc3614a19e04f0e1e87a2877f442f7",
"assets/assets/victor/throw_after_break_frames.txt": "ee6f47848120db8f012b3439bb25683f",
"assets/assets/victor/throw_break_commands.txt": "d033f5a128492bccf4d7425a2c790431",
"assets/assets/victor/throw_commands.txt": "99fa7217f0abffe76334a8f666c4cc54",
"assets/assets/victor/throw_damages.txt": "d3eacbf9bd04c9e64ee5c23f42762fe0",
"assets/assets/victor/throw_extras.txt": "693c5b0db2745e72c17ea631bdee9261",
"assets/assets/victor/throw_names.txt": "0f862bed8ea3e772cd456f6b18d66bc6",
"assets/assets/victor/throw_ranges.txt": "8603309146416052957985746d7ef208",
"assets/assets/victor/throw_start_frames.txt": "1897183cedd4037c23101ddd60e8fbcb",
"assets/assets/xiaoyu/move_commands.txt": "704c6e14f4af53059d9bfce5660d5b48",
"assets/assets/xiaoyu/move_counter_frames.txt": "7af19584327658565322fbf7a6c19750",
"assets/assets/xiaoyu/move_damages.txt": "5edfd641c675195018a3162f47a2fbaf",
"assets/assets/xiaoyu/move_extras.txt": "55d76f2cc5ce6d3f2b0d3ea00779a438",
"assets/assets/xiaoyu/move_guard_frames.txt": "403c4978917ce745aaa8aeed750d2975",
"assets/assets/xiaoyu/move_hit_frames.txt": "f2c7f48f25c7dde32fbaec632ae9b0ba",
"assets/assets/xiaoyu/move_names.txt": "2b9cfe967dc562c715ac39594e4fce22",
"assets/assets/xiaoyu/move_names_en.txt": "b3cf69e20004142634da55d944674985",
"assets/assets/xiaoyu/move_ranges.txt": "0f55ff49f746a3a06677868e237b86ee",
"assets/assets/xiaoyu/move_start_frames.txt": "0f3712ce6da14932663421d76588b96d",
"assets/assets/xiaoyu/throw_after_break_frames.txt": "b2c294bd461dba78d007856a27bad0a0",
"assets/assets/xiaoyu/throw_break_commands.txt": "beb03684149495f8726d2aaa0b625eb3",
"assets/assets/xiaoyu/throw_commands.txt": "1dfc63db88c634b91c8fc3d3ac8030e1",
"assets/assets/xiaoyu/throw_damages.txt": "7c991c6fcc840836adc8ae065baabf0e",
"assets/assets/xiaoyu/throw_extras.txt": "c5ed2125fb1fe0b5690c69ed245ea487",
"assets/assets/xiaoyu/throw_names.txt": "fddbfb7031aff8451ff550c4f6bedde7",
"assets/assets/xiaoyu/throw_ranges.txt": "b413c3a495e23e420e07ec9bc6f46ce9",
"assets/assets/xiaoyu/throw_start_frames.txt": "0563d3dc66c5f87c793b25afa43e4ebe",
"assets/assets/yoshimitsu/move_commands.txt": "c1d8b46814b3d518a44676802179a692",
"assets/assets/yoshimitsu/move_counter_frames.txt": "17c408e5dec2ed451bfdd50b96fe2870",
"assets/assets/yoshimitsu/move_damages.txt": "f949b0a5e94fb4de0137ae84397792cf",
"assets/assets/yoshimitsu/move_extras.txt": "cb4d72007e895a653944c11a639fb818",
"assets/assets/yoshimitsu/move_guard_frames.txt": "34c72a6a32b69a53de9cafc1556f50d5",
"assets/assets/yoshimitsu/move_hit_frames.txt": "c8e1abd3615780fbe326ad6182bbb8fa",
"assets/assets/yoshimitsu/move_names.txt": "220f1d1c03c9bb53505b81f1ef0ea2d1",
"assets/assets/yoshimitsu/move_names_en.txt": "0b7765442f31011467bcd67480dc2bd8",
"assets/assets/yoshimitsu/move_ranges.txt": "524b7a7a09e169da30845a6909beee69",
"assets/assets/yoshimitsu/move_start_frames.txt": "a06a0c86ea41f7d423f89a0c849977fa",
"assets/assets/yoshimitsu/throw_after_break_frames.txt": "226cced084d4ad9e033989376cfb30be",
"assets/assets/yoshimitsu/throw_break_commands.txt": "ae74c61281072d6d8dea0691dde6af39",
"assets/assets/yoshimitsu/throw_commands.txt": "33e8de8a9685847b331ae0e088e22081",
"assets/assets/yoshimitsu/throw_damages.txt": "c052f5616fc96b30db68dcf8e200df1e",
"assets/assets/yoshimitsu/throw_extras.txt": "fe7ad65b05a82be1698a4d1c3cfb3111",
"assets/assets/yoshimitsu/throw_names.txt": "925208363d0013f4f758332839c9a6ea",
"assets/assets/yoshimitsu/throw_ranges.txt": "7dbfd2caf7506f87de6caf18cd4272b2",
"assets/assets/yoshimitsu/throw_start_frames.txt": "e58cca3f3ef7be25ddcae726564a519e",
"assets/assets/zafina/move_commands.txt": "93e626747ab49927b9534d3eb52c339a",
"assets/assets/zafina/move_counter_frames.txt": "b73d1834f7afe64869bf8c2c9b5fc0a6",
"assets/assets/zafina/move_damages.txt": "e656935170f619fcd0b1eea5a6e1215b",
"assets/assets/zafina/move_extras.txt": "8c7bcb5c2bea46eaeb36f7fc8a9d8baa",
"assets/assets/zafina/move_guard_frames.txt": "401e0f9ec52baadadc99a83adfd5f1a5",
"assets/assets/zafina/move_hit_frames.txt": "5f4c99221abbcc92b9cf1516b2079a93",
"assets/assets/zafina/move_names.txt": "51c66e031708dc4625b57a382bd73801",
"assets/assets/zafina/move_names_en.txt": "ea131c1331bca6d61583e0e06aa808c6",
"assets/assets/zafina/move_ranges.txt": "0ab6e2d3b60d64ef4fbfea0e014b4eb9",
"assets/assets/zafina/move_start_frames.txt": "eebd7bc40da87a4d0eadeea9dcb9b31e",
"assets/assets/zafina/throw_after_break_frames.txt": "a28e0ac2ade5004835c11a2d4c044d5e",
"assets/assets/zafina/throw_break_commands.txt": "d033f5a128492bccf4d7425a2c790431",
"assets/assets/zafina/throw_commands.txt": "c3f85b3b237952e57e358d4d5bb243fc",
"assets/assets/zafina/throw_damages.txt": "0f48fcade20f1ecf5020fa588aa4b55d",
"assets/assets/zafina/throw_extras.txt": "892aab8439a080e09bac2b2ee0fa1a57",
"assets/assets/zafina/throw_names.txt": "309f8117bd0a0d0ba2729edd0b2da992",
"assets/assets/zafina/throw_ranges.txt": "8603309146416052957985746d7ef208",
"assets/assets/zafina/throw_start_frames.txt": "16f31aad4af8c2e14153e79c6747e659",
"assets/FontManifest.json": "1f515b8460fc0c33254529b1b27f54ae",
"assets/fonts/MaterialIcons-Regular.otf": "5b28849c12a854a776aeeb972bfd42ba",
"assets/NOTICES": "c256b479c8f3c6e646f7298db4d9baee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4a27b5bbb49ae2ef2d87b378cdd34915",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51a48baa91dd25f0cf74384ad9df9b53",
"/": "51a48baa91dd25f0cf74384ad9df9b53",
"main.dart.js": "ff8ba68654aae4bd4954a0b2b7e066ca",
"manifest.json": "42f6fe540936c3a2553c386687aaf37f",
"version.json": "bff988db29e7cbea22932c28edccd5f6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
