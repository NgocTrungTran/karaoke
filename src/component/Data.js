import { useEffect, useState } from "react";

export default function Data({ seconds }) {
    // let data = [

    //     { second: 35.144, word: "Hồn" },
    //     { second: 35.587997, word: "lỡ" },
    //     { second: 36.006, word: "sa" },
    //     { second: 36.475998, word: "vào" },
    //     { second: 36.972, word: "đôi" },
    //     { second: 37.495, word: "mắt" },
    //     { second: 37.939, word: "em" },


    //     { second: 42.641, word: "Chiều" },
    //     { second: 43.085, word: "nao" },
    //     { second: 43.476997, word: "xõa" },
    //     { second: 43.869, word: "tóc" },
    //     { second: 44.443, word: "ngồi" },
    //     { second: 45.017998, word: "bên" },
    //     { second: 45.488, word: "rèm" },


    //     { second: 49.276, word: "Thầm" },
    //     { second: 49.694, word: "ước" },
    //     { second: 50.059998, word: "nhưng" },
    //     { second: 50.503998, word: "nào" },
    //     { second: 51.026, word: "đâu" },
    //     { second: 51.575, word: "dám" },
    //     { second: 52.097, word: "nói" },


    //     { second: 53.325, word: "Khép" },
    //     { second: 53.769, word: "tâm" },
    //     { second: 54.37, word: "tư" },
    //     { second: 54.971, word: "lại" },
    //     { second: 55.415, word: "thôi" },


    //     { second: 56.669, word: "Đường" },
    //     { second: 57.139, word: "hoa" },
    //     { second: 57.766, word: "vẫn" },
    //     { second: 57.922, word: "chưa" },
    //     { second: 58.471, word: "mở" },
    //     { second: 58.940998, word: "lối" },


    //     { second: 62.572, word: "Đời" },
    //     { second: 63.042, word: "lắm" },
    //     { second: 63.408, word: "phong" },
    //     { second: 63.8, word: "trần" },
    //     { second: 64.34901, word: "tay" },
    //     { second: 64.949005, word: "trắng" },
    //     { second: 65.289, word: "tay" },


    //     { second: 69.26, word: "Trời" },
    //     { second: 69.73, word: "đông" },
    //     { second: 70.122, word: "ngại" },
    //     { second: 70.513, word: "gió" },
    //     { second: 71.036, word: "lùa" },
    //     { second: 71.637, word: "vai" },
    //     { second: 72.133, word: "gầy" },


    //     { second: 75.973, word: "Lầu" },
    //     { second: 76.39101, word: "kín" },
    //     { second: 76.783005, word: "trăng" },
    //     { second: 77.149, word: "về" },
    //     { second: 77.723, word: "không" },
    //     { second: 78.272, word: "lối" },
    //     { second: 78.768005, word: "chiếu" },


    //     { second: 80.100006, word: "Gác" },
    //     { second: 80.518005, word: "cao" },
    //     { second: 81.171005, word: "ngăn" },
    //     { second: 81.746, word: "niềm" },
    //     { second: 82.269005, word: "yêu" },


    //     { second: 83.444, word: "Thì" },
    //     { second: 83.888, word: "thôi" },
    //     { second: 84.515, word: "mơ" },
    //     { second: 84.672005, word: "ước" },
    //     { second: 85.168, word: "chi" },
    //     { second: 85.769005, word: "nhiều" },


    //     { second: 91.411, word: "Bên" },
    //     { second: 92.117004, word: "nhau" },
    //     { second: 93.292, word: "sao" },
    //     { second: 93.815, word: "tình" },
    //     { second: 94.416, word: "xa" },
    //     { second: 95.042, word: "vạn" },
    //     { second: 95.539, word: "lý" },
    //     { second: 96.740005, word: "cách" },
    //     { second: 97.263, word: "biệt" },
    //     { second: 97.838005, word: "mấy" },
    //     { second: 98.491005, word: "sơn" },
    //     { second: 98.935005, word: "khê" },


    //     { second: 101.233, word: "Ngày" },
    //     { second: 102.148, word: "đi" },
    //     { second: 103.34901, word: "mắt" },
    //     { second: 103.767006, word: "em" },
    //     { second: 104.473, word: "xanh" },
    //     { second: 105.126, word: "biển" },
    //     { second: 105.596, word: "sâu, " },
    //     { second: 106.719, word: "mắt" },
    //     { second: 107.137, word: "tôi" },
    //     { second: 107.921005, word: "rưng" },
    //     { second: 108.469, word: "rưng" },
    //     { second: 108.913, word: "sầu" },


    //     { second: 110.455, word: "Lặng" },
    //     { second: 111.108, word: "nghe" },
    //     { second: 111.709, word: "tiếng" },
    //     { second: 112.205, word: "pháo" },
    //     { second: 112.962006, word: "tiễn" },
    //     { second: 113.824005, word: "ai" },
    //     { second: 114.582, word: "qua" },
    //     { second: 114.922005, word: "cầu" },


    //     { second: 115.496, word: "Đường" },
    //     { second: 116.228004, word: "phố" },
    //     { second: 116.72401, word: "muôn" },
    //     { second: 117.064, word: "màu" },
    //     { second: 117.534004, word: "sao" },
    //     { second: 118.082, word: "thiếu" },
    //     { second: 118.579, word: "em" },


    //     { second: 122.628006, word: "Về" },
    //     { second: 123.046005, word: "đâu" },
    //     { second: 123.464005, word: "làn" },
    //     { second: 123.882, word: "tóc" },
    //     { second: 124.404, word: "xõa" },
    //     { second: 124.979004, word: "bên" },
    //     { second: 125.449005, word: "rèm" },


    //     { second: 129.263, word: "Lầu" },
    //     { second: 129.707, word: "vắng" },
    //     { second: 130.073, word: "không" },
    //     { second: 130.464, word: "người" },
    //     { second: 131.118, word: "song" },
    //     { second: 131.666, word: "khép" },
    //     { second: 132.18901, word: "kín" },


    //     { second: 133.46901, word: "Nhớ" },
    //     { second: 133.91301, word: "em" },
    //     { second: 134.461, word: "tôi" },
    //     { second: 135.088, word: "gọi" },
    //     { second: 135.584, word: "tên, " },
    //     { second: 136.70801, word: "chỉ" },
    //     { second: 137.20401, word: "nghe" },
    //     { second: 137.85701, word: "tiếng" },
    //     { second: 138.171, word: "lá" },
    //     { second: 139.059, word: "rơi" },
    //     { second: 139.58101, word: "thềm" },


    //     { second: 168.10701, word: "Bên" },
    //     { second: 169.021, word: "nhau" },
    //     { second: 170.06601, word: "sao" },
    //     { second: 170.48401, word: "tình" },
    //     { second: 171.11101, word: "xa" },
    //     { second: 171.738, word: "vạn" },
    //     { second: 172.20801, word: "lý" },
    //     { second: 173.358, word: "cách" },
    //     { second: 173.828, word: "biệt" },
    //     { second: 174.429, word: "mấy" },
    //     { second: 175.134, word: "sơn" },
    //     { second: 175.552, word: "khê" },


    //     { second: 177.981, word: "Ngày" },
    //     { second: 178.713, word: "đi" },
    //     { second: 180.019, word: "mắt" },
    //     { second: 180.489, word: "em" },
    //     { second: 181.09, word: "xanh" },
    //     { second: 181.743, word: "biển" },
    //     { second: 182.161, word: "sâu, " },
    //     { second: 183.389, word: "mắt" },
    //     { second: 183.83301, word: "tôi" },
    //     { second: 184.46, word: "rưng" },
    //     { second: 185.087, word: "rưng" },
    //     { second: 185.531, word: "sầu" },


    //     { second: 187.15001, word: "Lặng" },
    //     { second: 187.856, word: "nghe" },
    //     { second: 188.378, word: "tiếng" },
    //     { second: 188.639, word: "pháo" },
    //     { second: 189.031, word: "tiễn" },
    //     { second: 189.58, word: "ai" },
    //     { second: 189.97101, word: "qua" },
    //     { second: 191.878, word: "cầu" },


    //     { second: 192.479, word: "Đường" },
    //     { second: 192.949, word: "phố" },
    //     { second: 193.472, word: "muôn" },
    //     { second: 193.864, word: "màu" },
    //     { second: 194.464, word: "sao" },
    //     { second: 195.039, word: "thiếu" },
    //     { second: 195.536, word: "em" },


    //     { second: 199.271, word: "Về" },
    //     { second: 199.68901, word: "đâu" },
    //     { second: 200.133, word: "làn" },
    //     { second: 200.52501, word: "tóc" },
    //     { second: 201.047, word: "xõa" },
    //     { second: 201.62201, word: "bên" },
    //     { second: 202.144, word: "rèm" },


    //     { second: 205.932, word: "Lầu" },
    //     { second: 206.35, word: "vắng" },
    //     { second: 206.742, word: "không" },
    //     { second: 207.108, word: "người" },
    //     { second: 207.709, word: "song" },
    //     { second: 208.336, word: "khép" },
    //     { second: 208.806, word: "kín" },


    //     { second: 210.033, word: "Nhớ" },
    //     { second: 210.478, word: "em" },
    //     { second: 211.104, word: "tôi" },
    //     { second: 211.627, word: "gọi" },
    //     { second: 212.149, word: "tên, " },
    //     { second: 213.429, word: "chỉ" },
    //     { second: 213.90001, word: "nghe" },
    //     { second: 214.709, word: "tiếng" },
    //     { second: 215.284, word: "lá" },
    //     { second: 215.493, word: "rơi" },
    //     { second: 215.83301, word: "thềm" },


    //     { second: 219.307, word: "Lầu" },
    //     { second: 219.699, word: "vắng" },
    //     { second: 220.117, word: "không" },
    //     { second: 220.535, word: "người" },
    //     { second: 221.162, word: "song" },
    //     { second: 221.684, word: "khép" },
    //     { second: 222.233, word: "kín" },


    //     { second: 223.513, word: "Nhớ" },
    //     { second: 223.904, word: "em" },
    //     { second: 224.558, word: "tôi" },
    //     { second: 225.184, word: "gọi" },
    //     { second: 225.602, word: "tên, " },
    //     { second: 226.935, word: "chỉ" },
    //     { second: 229.05101, word: "nghe" },
    //     { second: 232.96901, word: "tiếng" },
    //     { second: 234.06601, word: "lá" },
    //     { second: 235.13701, word: "rơi" },
    //     { second: 236.522, word: "thềm" }]
    // ];

    let data = [

        { second: 35.144, word: "Hồn" },
        { second: 35.587997, word: "lỡ" },
        { second: 36.006, word: "sa" },
        { second: 36.475998, word: "vào" },
        { second: 36.972, word: "đôi" },
        { second: 37.495, word: "mắt" },
        { second: 37.939, word: "em" },


        { second: 42.641, word: "Chiều" },
        { second: 43.085, word: "nao" },
        { second: 43.476997, word: "xõa" },
        { second: 43.869, word: "tóc" },
        { second: 44.443, word: "ngồi" },
        { second: 45.017998, word: "bên" },
        { second: 45.488, word: "rèm" },


        { second: 49.276, word: "Thầm" },
        { second: 49.694, word: "ước" },
        { second: 50.059998, word: "nhưng" },
        { second: 50.503998, word: "nào" },
        { second: 51.026, word: "đâu" },
        { second: 51.575, word: "dám" },
        { second: 52.097, word: "nói" },


        { second: 53.325, word: "Khép" },
        { second: 53.769, word: "tâm" },
        { second: 54.37, word: "tư" },
        { second: 54.971, word: "lại" },
        { second: 55.415, word: "thôi" },


        { second: 56.669, word: "Đường" },
        { second: 57.139, word: "hoa" },
        { second: 57.766, word: "vẫn" },
        { second: 57.922, word: "chưa" },
        { second: 58.471, word: "mở" },
        { second: 58.940998, word: "lối" },


        { second: 62.572, word: "Đời" },
        { second: 63.042, word: "lắm" },
        { second: 63.408, word: "phong" },
        { second: 63.8, word: "trần" },
        { second: 64.34901, word: "tay" },
        { second: 64.949005, word: "trắng" },
        { second: 65.289, word: "tay" },


        { second: 69.26, word: "Trời" },
        { second: 69.73, word: "đông" },
        { second: 70.122, word: "ngại" },
        { second: 70.513, word: "gió" },
        { second: 71.036, word: "lùa" },
        { second: 71.637, word: "vai" },
        { second: 72.133, word: "gầy" },


        { second: 75.973, word: "Lầu" },
        { second: 76.39101, word: "kín" },
        { second: 76.783005, word: "trăng" },
        { second: 77.149, word: "về" },
        { second: 77.723, word: "không" },
        { second: 78.272, word: "lối" },
        { second: 78.768005, word: "chiếu" },


        { second: 80.100006, word: "Gác" },
        { second: 80.518005, word: "cao" },
        { second: 81.171005, word: "ngăn" },
        { second: 81.746, word: "niềm" },
        { second: 82.269005, word: "yêu" },


        { second: 83.444, word: "Thì" },
        { second: 83.888, word: "thôi" },
        { second: 84.515, word: "mơ" },
        { second: 84.672005, word: "ước" },
        { second: 85.168, word: "chi" },
        { second: 85.769005, word: "nhiều" },


        { second: 91.411, word: "Bên" },
        { second: 92.117004, word: "nhau" },
        { second: 93.292, word: "sao" },
        { second: 93.815, word: "tình" },
        { second: 94.416, word: "xa" },
        { second: 95.042, word: "vạn" },
        { second: 95.539, word: "lý" },
        { second: 96.740005, word: "cách" },
        { second: 97.263, word: "biệt" },
        { second: 97.838005, word: "mấy" },
        { second: 98.491005, word: "sơn" },
        { second: 98.935005, word: "khê" },


        { second: 101.233, word: "Ngày" },
        { second: 102.148, word: "đi" },
        { second: 103.34901, word: "mắt" },
        { second: 103.767006, word: "em" },
        { second: 104.473, word: "xanh" },
        { second: 105.126, word: "biển" },
        { second: 105.596, word: "sâu, " },
        { second: 106.719, word: "mắt" },
        { second: 107.137, word: "tôi" },
        { second: 107.921005, word: "rưng" },
        { second: 108.469, word: "rưng" },
        { second: 108.913, word: "sầu" },


        { second: 110.455, word: "Lặng" },
        { second: 111.108, word: "nghe" },
        { second: 111.709, word: "tiếng" },
        { second: 112.205, word: "pháo" },
        { second: 112.962006, word: "tiễn" },
        { second: 113.824005, word: "ai" },
        { second: 114.582, word: "qua" },
        { second: 114.922005, word: "cầu" },


        { second: 115.496, word: "Đường" },
        { second: 116.228004, word: "phố" },
        { second: 116.72401, word: "muôn" },
        { second: 117.064, word: "màu" },
        { second: 117.534004, word: "sao" },
        { second: 118.082, word: "thiếu" },
        { second: 118.579, word: "em" },


        { second: 122.628006, word: "Về" },
        { second: 123.046005, word: "đâu" },
        { second: 123.464005, word: "làn" },
        { second: 123.882, word: "tóc" },
        { second: 124.404, word: "xõa" },
        { second: 124.979004, word: "bên" },
        { second: 125.449005, word: "rèm" },


        { second: 129.263, word: "Lầu" },
        { second: 129.707, word: "vắng" },
        { second: 130.073, word: "không" },
        { second: 130.464, word: "người" },
        { second: 131.118, word: "song" },
        { second: 131.666, word: "khép" },
        { second: 132.18901, word: "kín" },


        { second: 133.46901, word: "Nhớ" },
        { second: 133.91301, word: "em" },
        { second: 134.461, word: "tôi" },
        { second: 135.088, word: "gọi" },
        { second: 135.584, word: "tên, " },
        { second: 136.70801, word: "chỉ" },
        { second: 137.20401, word: "nghe" },
        { second: 137.85701, word: "tiếng" },
        { second: 138.171, word: "lá" },
        { second: 139.059, word: "rơi" },
        { second: 139.58101, word: "thềm" },


        { second: 168.10701, word: "Bên" },
        { second: 169.021, word: "nhau" },
        { second: 170.06601, word: "sao" },
        { second: 170.48401, word: "tình" },
        { second: 171.11101, word: "xa" },
        { second: 171.738, word: "vạn" },
        { second: 172.20801, word: "lý" },
        { second: 173.358, word: "cách" },
        { second: 173.828, word: "biệt" },
        { second: 174.429, word: "mấy" },
        { second: 175.134, word: "sơn" },
        { second: 175.552, word: "khê" },


        { second: 177.981, word: "Ngày" },
        { second: 178.713, word: "đi" },
        { second: 180.019, word: "mắt" },
        { second: 180.489, word: "em" },
        { second: 181.09, word: "xanh" },
        { second: 181.743, word: "biển" },
        { second: 182.161, word: "sâu, " },
        { second: 183.389, word: "mắt" },
        { second: 183.83301, word: "tôi" },
        { second: 184.46, word: "rưng" },
        { second: 185.087, word: "rưng" },
        { second: 185.531, word: "sầu" },


        { second: 187.15001, word: "Lặng" },
        { second: 187.856, word: "nghe" },
        { second: 188.378, word: "tiếng" },
        { second: 188.639, word: "pháo" },
        { second: 189.031, word: "tiễn" },
        { second: 189.58, word: "ai" },
        { second: 189.97101, word: "qua" },
        { second: 191.878, word: "cầu" },


        { second: 192.479, word: "Đường" },
        { second: 192.949, word: "phố" },
        { second: 193.472, word: "muôn" },
        { second: 193.864, word: "màu" },
        { second: 194.464, word: "sao" },
        { second: 195.039, word: "thiếu" },
        { second: 195.536, word: "em" },


        { second: 199.271, word: "Về" },
        { second: 199.68901, word: "đâu" },
        { second: 200.133, word: "làn" },
        { second: 200.52501, word: "tóc" },
        { second: 201.047, word: "xõa" },
        { second: 201.62201, word: "bên" },
        { second: 202.144, word: "rèm" },


        { second: 205.932, word: "Lầu" },
        { second: 206.35, word: "vắng" },
        { second: 206.742, word: "không" },
        { second: 207.108, word: "người" },
        { second: 207.709, word: "song" },
        { second: 208.336, word: "khép" },
        { second: 208.806, word: "kín" },


        { second: 210.033, word: "Nhớ" },
        { second: 210.478, word: "em" },
        { second: 211.104, word: "tôi" },
        { second: 211.627, word: "gọi" },
        { second: 212.149, word: "tên, " },
        { second: 213.429, word: "chỉ" },
        { second: 213.90001, word: "nghe" },
        { second: 214.709, word: "tiếng" },
        { second: 215.284, word: "lá" },
        { second: 215.493, word: "rơi" },
        { second: 215.83301, word: "thềm" },


        { second: 219.307, word: "Lầu" },
        { second: 219.699, word: "vắng" },
        { second: 220.117, word: "không" },
        { second: 220.535, word: "người" },
        { second: 221.162, word: "song" },
        { second: 221.684, word: "khép" },
        { second: 222.233, word: "kín" },


        { second: 223.513, word: "Nhớ" },
        { second: 223.904, word: "em" },
        { second: 224.558, word: "tôi" },
        { second: 225.184, word: "gọi" },
        { second: 225.602, word: "tên, " },
        { second: 226.935, word: "chỉ" },
        { second: 229.05101, word: "nghe" },
        { second: 232.96901, word: "tiếng" },
        { second: 234.06601, word: "lá" },
        { second: 235.13701, word: "rơi" },
        { second: 236.522, word: "thềm" }
    ];

    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            if (seconds >= data[i].second && seconds < data[i + 1].second) {
                document.getElementById(`${data[i].second}`).style.color = "black";
            }
        }
    }, [seconds]);


    return (
        <div className="lyric-music text-start">
            {data.map((item) => (
                <>
                    <span
                        data-text={item.word}
                        className="word"
                        id={item.second}
                        key={item.second}
                    >{item.word} </span>
                    {item.second == 37.939 
                    || item.second == 45.488
                    || item.second == 52.097
                    || item.second == 55.415
                    || item.second == 58.940998
                    || item.second == 65.289
                    || item.second == 72.133
                    || item.second == 78.768005
                    || item.second == 82.269005
                    || item.second == 85.769005
                    || item.second == 98.935005
                    || item.second == 108.913
                    || item.second == 114.922005
                    || item.second == 118.579
                    || item.second == 125.449005
                    || item.second == 132.18901
                    || item.second == 139.58101
                    || item.second == 175.552
                    || item.second == 185.531
                    || item.second == 191.878
                    || item.second == 195.536
                    || item.second == 202.144
                    || item.second == 208.806
                    || item.second == 215.83301
                    || item.second == 222.233
                    || item.second == 236.522
                    ? <br /> : null}
                    
                </>
            ))}
        </div>
    );
}