import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, FlatList } from 'react-native';
import { getListProductType } from '../constants/api';
import X2JS from 'x2js';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get("window");

const Home = ({  }) => {
  const [listProductType, setListProductType] = useState(null);
  const fakeData = [{
    "ma_loai_sp": "HD",
    "ten_loai_sp": "Hóa đơn điện tử"
  },
  {
    "ma_loai_sp": "VSIGN",
    "ten_loai_sp": "Vsign"
  },
  {
    "ma_loai_sp": "ACC",
    "ten_loai_sp": "Phần mềm kế toán Acc2k"
  },
  {
    "ma_loai_sp": "BCT",
    "ten_loai_sp": "Phần mềm kế toán Online"
  },
  {
    "ma_loai_sp": "MV",
    "ten_loai_sp": "Hóa đơn mua vào"
  },
  {
    "ma_loai_sp": "CKS",
    "ten_loai_sp": "Chữ ký số"
  },
  {
    "ma_loai_sp": "BH",
    "ten_loai_sp": "ebanhang.com"
  },
  {
    "ma_loai_sp": "KS",
    "ten_loai_sp": "ekyso.vn"
  },
  {
    "ma_loai_sp": "LVC",
    "ten_loai_sp": "lenhvanchuyen.vn"
  },
  {
    "ma_loai_sp": "TDT",
    "ten_loai_sp": "ethuedientu.com"
  },
  {
    "ma_loai_sp": "BL",
    "ten_loai_sp": "Bien lai"
  },
  {
    "ma_loai_sp": "TNCN",
    "ten_loai_sp": "TNCN"
  },
  {
    "ma_loai_sp": "PDT",
    "ten_loai_sp": "PDT"
  },
  {
    "ma_loai_sp": "PTK",
    "ten_loai_sp": "Phi thiet ke"
  },
  {
    "ma_loai_sp": "CN",
    "ten_loai_sp": "Cong no"
  }]

  useEffect(() => {
    fetch('https://daily.ehoadondientu.com/myservice.asmx/getDmnhsp')
      .then((response) => response.text())
      .then((data) => {
        var x2js = new X2JS();
        let dataJson = x2js.xml2js(data)
        setListProductType(dataJson.string.__text)

      });

  }, []);
  function renderListProductType(listProductType) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "yellow",
            borderRadius: 20,
            width: 200,
            height: 50,
          }}
          onPress={() =>
            console.log(item.ma_loai_sp)
          }
        >
          <Text>{item.ten_loai_sp}</Text>

        </TouchableOpacity>
      );
    };
    if (listProductType) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, marginTop: SIZES.padding }}>
            <FlatList
              data={listProductType}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.ma_loai_sp}`}
              showsHorizontalScrollIndicator={false}

            />
          </View>
        </View>
      );
    }
  }

  if (listProductType) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>{renderListProductType(fakeData)}</View>
      </View>
    );
  }
};
export default Home