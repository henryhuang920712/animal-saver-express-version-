export default class ResultObject {
  constructor(useranswer, result) {
    this.useranswer = useranswer;
    this.result = result;
  }
  //顯示結果
  DemoResult() {
    const listItem = document.querySelector(".instruction");
    for (let i = 0; i < this.result.length; i++) {
      let resultcontent = document.createElement("li");
      resultcontent.className = "resultcontent";
      resultcontent.textContent = this.result[i];
      listItem.appendChild(resultcontent);
    }
  }
}

export const results = [
  new ResultObject(
    ["A1", "A1", "A1"],
    [
      "拍照存證並撥打110報案：如果你目睹或發現有人虐待寵物，導致其嚴重殘缺、重要器官功能喪失甚至死亡，這已經涉及刑事犯罪。為了保護動物並避免進一步受害，你應該立即拍照留下證據，然後撥打當地的緊急報警號碼110。向警方報案，提供清楚的描述和所掌握的證據，讓他們介入調查。這將協助追究虐待者的責任，並保護其他動物不再受到傷害。",
      "聯絡地方政府動物保護機構：撥打當地政府動物保護機構的電話，通報你所發現的寵物虐待情況。這些機構通常負責處理動物福利和保護事務，他們將有專責人員處理這樣的舉報。提供盡可能詳細的情況描述和證據，讓他們了解情況的嚴重性。他們將能夠採取適當的行動，保護受虐待的寵物並追究虐待者的責任。",
      "聯絡相關非政府組織：如果你無法聯繫到地方政府的動物保護機構或認為他們的回應不足，你可以考慮聯絡其他相關的非政府組織（NGO）。在台灣，「火山出品之暗黑雞湯 - 台灣NOE行動組織」是一個致力於動物權益和福利的組織，他們可能能夠提供支援和協助處理虐待案件。聯絡這樣的組織，向他們詳細說明情況，並尋求他們的專業建議和支援。",
    ]
  ),
  new ResultObject(
    ["A1", "A1", "A2"],
    [
      "聯絡中華民國動物保護協會：中華民國動物保護協會是專門致力於動物福利的組織，他們能夠提供相關的協助和指導。如果你發現受傷的貓狗，但情況不是虐待，你可以儘快聯絡該協會，向他們報告情況並尋求支援。他們可能會提供有關處理受傷動物的建議，或者直接派遣救援人員前往現場幫助。",
      "打電話至119並依照專業人員指示行動：如果你發現受傷的貓狗並需要緊急救援，你可以撥打當地的緊急求助號碼，例如中華民國的119。告訴他們你遇到了一隻受傷的貓狗，但情況不屬於虐待，並請求他們提供協助。專業的緊急救援人員將指導你該如何處理情況，可能會提供急救措施或建議你將動物送往最近的獸醫診所。",
    ]
  ),
  new ResultObject(
    ["A1", "A2", "A1"],
    [
      "送到附近醫院查晶片：如果你發現一隻貓狗走失，而牠看似無受傷的情況下，一個重要的步驟是尋找晶片。晶片是一種小型的電子設備，通常植入在寵物的體內，上面儲存了主人的聯絡資訊。你可以將走失的貓狗送往附近的獸醫診所或動物醫院，讓專業人員幫助查找晶片。這將有助於確定貓狗的主人，並通知他們有關其走失的情況。主動與當地的動物醫院、寵物商店、公園等地聯繫，讓他們知道有關走失貓狗的資訊。",
      "寵物遺失協尋專區：如果你確定這隻貓狗是走失的寵物，你可以在寵物遺失協尋專區尋求協助。這些專區通常是由社群組織或網站提供，旨在協助尋找走失的寵物。你可以提供詳細的描述、照片和貓狗的資訊，讓人們能夠認出這隻走失的貓狗，並提供相應的協助。這樣的專區通常有大量的志願者和寵物愛好者，他們會努力協助尋找並提供所需的援助。",
    ]
  ),
  new ResultObject(
    ["A1", "A2", "A2"],
    [
      "當貓狗有明顯的主人陪伴：如果你注意到一隻貓狗與其主人在一起，看起來健康且得到照顧，你無需特別處理或理會。這表示貓狗有合適的照顧者，並且在他們的監督下。",
      "貓狗正在公共區域遊蕩：如果貓狗在公共區域自由活動，看起來沒有受傷、不餓或受虐待的跡象，並且沒有跟隨任何人，你無需特別處理或理會。一些地區有許可證讓貓狗在公共區域活動，而不是被綁定或限制在家中。",
      "貓狗有識別標籤或晶片：如果貓狗有識別標籤或晶片，表明牠們有主人且註冊，你可以試著聯繫主人，但如果你無法聯繫到主人或沒有立即需要，你無需特別處理或理會。識別標籤或晶片是確定貓狗歸屬的重要方式，但如果牠們看起來健康且自由移動，無需特別干涉。",
      "在這些情況下，如果你對貓狗有任何疑慮，你可以觀察一段時間以確保牠們得到適當的照顧。如果你認為有虐待或忽視情況發生，或者貓狗顯示明顯的病態狀態，你可以聯絡當地的動物保護組織或動物控制部門報告情況。他們將能夠進一步調查並採取適當的行動，保護貓狗的福利。",
    ]
  ),
  new ResultObject(
    ["A2", "A1", "A1"],
    [
      "拍照存證並撥打 110 報案，避免動物再受到傷害：如果你發現一隻受傷且受虐待的鳥類，重要的是先拍照作為證據。拍攝照片時，盡量捕捉到受傷部位或虐待的情況，以便提供有力的證據。接著，立即撥打當地的緊急報警號碼（例如 110）報案。向警方提供詳細的情況描述和提供所拍攝的照片，這樣他們將能夠快速處理並保護受傷的鳥類。",
      "聯絡中華民國野鳥學會：另一個重要的步驟是聯絡中華民國野鳥學會，他們是一個專門關注鳥類保護和福利的組織。你可以向他們報告受傷且受虐待的鳥類情況，並提供詳細的描述和照片。野鳥學會的專業人員將能夠提供建議和適當的協助，包括可能的救援行動或引導你到達當地的鳥類救援中心。",
      "當你遇到受傷且受虐待的鳥類時，記住保護自身的安全也是非常重要的。避免直接接觸受傷的鳥類，特別是野生鳥類，以避免傷害它們和自己。與當地的動物保護組織、環保機構或野鳥學會合作，可以提高救援受虐待鳥類的機會，並確保它們得到適當的護理和保護。",
    ]
  ),
  new ResultObject(
    ["A2", "A1", "A2"],
    [
      "撥打 1999 市民專線：如果你發現一隻受傷的鳥類，但沒有任何受虐待的跡象，你可以撥打當地的 1999 市民專線（根據台灣地區為例），詢問有關受傷鳥類的處理建議。市民專線是一個提供民眾支援和協助的熱線電話，他們可以提供相關資訊或將你轉介至相關單位。",
      "撥打 1959 動物保護專線：另一個選項是撥打 1959 動物保護專線（根據台灣地區為例）。這是一個專為動物保護問題設立的熱線電話，他們可以提供關於處理受傷鳥類的建議和指引。他們可能會要求你提供詳細的情況描述，以便他們能夠更好地理解情況並提供相應的協助。",
      "在等待專業意見的同時，請儘量避免直接接觸受傷的鳥類，以免進一步傷害它們或自己。專業人員可以根據鳥類的狀況和當地的資源，提供合適的建議，包括可能的救援行動或將鳥類轉送至適當的獸醫診所或野鳥救援中心進行治療和護理。",
      "如果你無法聯繫到市民專線或動物保護專線，你可以試著尋求當地的動物保護組織、獸醫診所或野鳥學會的協助，他們通常有專業的人員和資源來處理受傷的鳥類。",
    ]
  ),
  new ResultObject(
    ["A2", "A2"],
    [
      "鳥類在自然環境中自由活動：如果你看到一隻鳥類在自然環境中自由飛行或自由活動，看起來健康且自主，無需特別處理或理會。這是鳥類正常的行為，它們擁有飛行和自由活動的能力。無需擔心它們的安危，讓它們繼續享受自由生活。",
      "鳥類有明顯的群體陪伴：如果鳥類在群體中飛行或活動，且看起來健康，無需特別處理或理會。鳥類通常以群體的形式生活，彼此互相支持和保護。只要它們沒有明顯的受傷或受虐待的跡象，你可以讓它們繼續群體活動。",
      "鳥類出現在合適的棲息地：如果鳥類出現在合適的棲息地，例如樹木、灌木叢或湖泊等自然環境，且看起來沒有困惑或危險的情況，無需特別處理或理會。鳥類在自然環境中有著各自的生態角色和適應能力，只要它們沒有受傷或受虐待，你可以讓它們自行照顧自己。",
      "在這些情況下，如果你對鳥類有任何疑慮，可以觀察一段時間以確保它們沒有受到任何傷害或困境。如果你注意到鳥類有明顯的受傷、虐待或需要幫助的跡象，你可以聯繫當地的野鳥學會、動物保護組織或環保機構尋求建議和協助。他們將能夠提供適當的指引和支持。",
    ]
  ),
  new ResultObject(
    ["A3", "A1"],
    [
      "撥打 1999 市民專線：如果你發現一隻野生動物受傷，你可以撥打當地的 1999 市民專線（根據台灣地區為例）。市民專線是一個提供民眾支援和協助的熱線電話，他們可以提供相關資訊或將你轉介至相關單位。向他們詢問野生動物受傷的處理建議，並提供詳細的情況描述。",
      "撥打 1959 動物保護專線：另一個選項是撥打 1959 動物保護專線（根據台灣地區為例）。這是一個專為動物保護問題設立的熱線電話，他們可以提供關於處理野生動物受傷的建議和指引。提供他們詳細的情況描述，讓他們了解受傷野生動物的狀況，以便提供相應的協助。",
      "在等待專業意見的同時，請注意保護自己的安全，尤其是野生動物可能感到害怕或痛苦時。避免直接接觸受傷的野生動物，以免傷害它們和自己。專業人員可以根據受傷野生動物的種類和狀況，提供適當的建議和處理方式，包括可能的救援行動、引導你到達當地的野生動物救援中心或將你轉介至相關的專業機構。",
      "如果你無法聯繫到市民專線或動物保護專線，你可以試著尋求當地的動物保護組織、環保機構或當地政府的自然資源相關部門的協助。他們通常有專業的人員和資源來處理野生動物救援和保護的問題。",
    ]
  ),
  new ResultObject(
    ["A3", "A2", "A1"],
    [
      "撥打消防局119：如果你遇到一隻野生動物，並且感到自己或他人的安全受到威脅，你應該立即撥打當地的消防局119（根據台灣地區為例）。消防局是緊急應對機構，他們有訓練過的專業人員可以處理野生動物威脅的情況。告知他們你所遇到的狀況，他們將提供相應的協助和指導，以確保你的安全。",
      "聯絡全台野生動物救傷單位：如果你遇到一隻野生動物威脅，但動物本身並無受傷，你可以聯絡全台野生動物救傷單位或相關的野生動物保護組織。這些組織通常有專業的人員和資源處理野生動物問題。他們可以提供建議和指導，以確保你和野生動物的安全。請提供詳細的情況描述，包括動物的種類、行為特徵和所在位置等。",
      "在等待專業人員的到來期間，請保持冷靜並遵從他們的指示。避免與野生動物直接接觸，以降低潛在的威脅和危險。專業人員將根據情況評估動物的行為和可能的解決方案，包括將野生動物安全轉移至適當的棲息地或採取其他適當的措施以確保人類和動物的安全。",
    ]
  ),
  new ResultObject(
    ["A3", "A2", "A2"],
    [
      "野生動物在適當的棲息地出現：如果你在野外或自然環境中看到一隻野生動物，且它看起來健康、活潑並在適當的棲息地出現，無需特別處理或理會。野生動物在自然環境中是常見的，並且有自己的生活方式和生態角色。讓它們自由地生活在它們所屬的棲息地，並避免干擾它們。",
      "野生動物沒有威脅到人類或其他動物的安全：如果野生動物並沒有對人類或其他動物的安全構成威脅，例如它們保持距離、繞過或在安全的區域活動，無需特別處理或理會。這表示野生動物正常適應並遵從自然的本能行為。觀察它們的行為，但不要干擾或接近它們，以確保自己和野生動物的安全。",
      "野生動物在適當的季節或活動期間出現：有些野生動物在特定的季節或活動期間會出現，例如鳥類的遷徙季節或特定物種的繁殖季節。如果你在這些時期看到野生動物，並且它們沒有受傷或沒有威脅到安全，無需特別處理或理會。這些動物的行為是正常的自然現象，讓它們按照它們的自然節奏生活。",
      "在這些情況下，如果你對野生動物有任何疑慮，你可以觀察一段時間以確保它們沒有受到任何傷害或困境。然而，如果你注意到野生動物受傷、虐待或需要幫助的跡象，你應該聯繫當地的野生動物保護組織、環保機構或相關的專業機構尋求協助。他們將能夠提供適當的指引和支援。",
    ]
  ),
];
