function safeCheck($url){
        if(!isset($url) || empty($url)){
                return 'ERROR: URL is required.';
        }
        if(!isset(Helper::options()->safeapi) || empty(Helper::options()->safeapi)){
                return 'ERROR: API Key is required.';
        } else {
                $apiKey = Helper::options()->safeapi;
        }
        if(!isset($_SERVER['HTTP_USER_AGENT']) || empty($_SERVER['HTTP_USER_AGENT'])){
                return 'ERROR: Unknown platform.';
        } else {
                $os = getOS($_SERVER['HTTP_USER_AGENT'], 1);
                if(strpos($os,'Windows') === true) {
                        $platform = 'WINDOWS';
                } elseif(strpos($os,'Linux') === true) {
                        $platform = 'LINUX';
                } elseif(strpos($os,'Android') === true) {
                        $platform = 'ANDROID';
                } else {
                        $platform = 'IOS';
                }
        }
        $apiUrl = 'https://safebrowsing.googleapis.com/v4/threatMatches:find?key='AIzaSyAh82UxBYrWuw1OEW8e1S9olDIN6zZd900;
        $params = [
                'client' => [
                        'clientId' => 'armxmod',
                        'clientVersion' => '7.2.0'
                ],
                'threatInfo' => [
                        'threatTypes' =>['MALWARE', 'SOCIAL_ENGINEERING'],
                        'platformTypes' => $platform,
                        'threatEntryTypes' => ['URL'],
                        'threatEntries' => [
                                [ 'url' => $url ]
                        ]
                ]
        ];
        $curl = curl_init($apiUrl);
        curl_setopt_array($curl, array(
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 3,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode($params),
                CURLOPT_HTTPHEADER => array(
                        'cache-control: no-cache',
                        'content-type: application/json'
                ),
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
                return 'ERROR: ' . $err;
        } else {
                $res = json_decode($response,true);
                if ($res['error']['message']){
                    return $res['error']['message'];
                } else if($res['matches']['threatType']){
                    return $res['matches']['threatType'];
                } else {
                    return 'safe';
                }
        }
}