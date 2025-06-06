---
sidebar_position: 5
toc_max_heading_level: 2
---

import Memo from '@site/src/components/memo';

# 〈侵食度〉

　**侵食度**はキャラクターの鉱石病の進行度を表現した数値で、高くなると様々な行動に制約が発生します。  
　侵食度はあくまでTRPGのシステムで鉱石病の深刻さを表現するための便宜上のもので、原作ゲームに登場する源石融合率とは異なるものです。

　侵食度は段階が分かれており、以下の表のとおりに区分されます。

<table style={{textAlign: 'left'}}>
  <thead>
    <tr>
      <th style={{minWidth: '6em'}}>侵食段階</th>
      <th style={{minWidth: '5.5em'}}>侵食度</th>
      <th>影響</th>
      <th>描写例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0<br /><b>未感染</b></td>
      <td>0</td>
      <td>なし</td>
      <td>なし</td>
    </tr>
    <tr>
      <td>1<br /><b>軽度</b></td>
      <td>1～20</td>
      <td>
        <ul style={{margin:0}}>
          <li>運動系技能の判定値-1</li>
        </ul>
      </td>
      <td>
        <ul style={{margin:0}}>
          <li>感染部位の軽い痛み、違和感</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>2<br /><b>中等度</b></td>
      <td>21～70</td>
      <td>
        <ul style={{margin:0}}>
            <li>運動系技能の判定値-1</li>
            <li>〈アーツ〉技能の判定値+1</li>
            <li>他のすべての技能の判定値-1</li>
        </ul>
      </td>
      <td>
        <ul style={{margin:0}}>
          <li>感染部位の強い痛み、機能低下</li>
          <li>感染部位の体表に源石結晶が露出する</li>
          <li>一部部位の肥大化などの身体的変化</li>
          <li>身体の中の源石を感じ、アーツユニットがなくてもアーツを使える感覚を得る</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3<br /><b>重度</b></td>
      <td>71～90</td>
      <td>
        <ul style={{margin:0}}>
          <li>〈アーツ〉技能の判定値+2</li>
          <li>他のすべての技能の判定値-2</li>
        </ul>
      </td>
      <td>
        <ul style={{margin:0}}>
          <li>全身の激烈な痛み、機能低下</li>
          <li>一部部位が源石に変化し動かせなくなる</li>
          <li>幻覚などの精神的不調に陥る</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>4<br /><b>末期</b></td>
      <td>91～100</td>
      <td>
        <ul style={{margin:0}}>
          <li>能動的な行動ができなくなる<ul style={{margin:0}}><li>〈＊生存〉などは判定できる</li></ul></li>
          <li>時間経過で【源石侵食判定】が発生する</li>
          <li><u><b>セッション終了時、死亡扱いとする</b></u></li>
        </ul>
      </td>
      <td>
        <ul style={{margin:0}}>
          <li>感覚喪失</li>
          <li>意識朦朧</li>
          <li>全身に源石結晶が露出する</li>
          <li>ほとんどの部位が源石に変化し動かせなくなる</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>5<br /><b>死亡</b></td>
      <td>101～</td>
      <td>
        <ul style={{margin:0}}>
          <li><u><b>即座に死亡する</b></u></li>
          <li>周囲のすべてのキャラクターに【源石侵食判定】を発生させる</li>
        </ul>
      </td>
      <td>
        <ul style={{margin:0}}>
          <li>全身が源石に変化し、粉塵を周囲に撒き散らす“爆発”を起こす</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<Memo>
　鉱石病は感染者の身体を残酷に蝕みますが、それでもエーシェンツたちは精強な身体能力を持っています。
</Memo>

----

　侵食度に関わる判定に使用するため、<u>**「侵食段階」「生理的耐性」**</u>の2つのステータスをキャラクターシートやセッションツールに設定しておくと便利です。

### 侵食段階

　侵食度を段階分けしたもので、表に記載された0～5の値です。

### 生理的耐性

　キャラクターの鉱石病への抵抗力を表現したもので、キャラクターの<b>【身体】</b>と<b>【運勢】</b>の合計になります。  
　身体の頑強さと鉱石病への抵抗力が一致しないキャラクターを作りたい場合は、【運勢】のように2～12の任意の値を設定してもいいでしょう。

<Memo>
　生理的耐性は【精神】に依りません。どんなに強靭な精神性を持ってしても、鉱石病の無慈悲さから逃れることはできないのです。
</Memo>

　表にある侵食度による影響をCCFOLIAのチャットパレットなどに反映したい場合、BCDiceでは以下のようにコマンドを書けます。

<table>
    <tbody>
        <tr>
            <td>運動系技能</td>
            <td>`{技能レベル}DM<=({判定値}-({侵食段階}*4/5R))`</td>
        </tr>
        <tr>
            <td>〈アーツ〉</td>
            <td>`{技能レベル}DM<=({判定値}+(({侵食段階}-1)*2/3C))`</td>
        </tr>
        <tr>
            <td>ほかの技能</td>
            <td>`{技能レベル}DM<=({判定値}-(({侵食段階}-1)*2/3R))`</td>
        </tr>
    </tbody>
</table>

　エモクロアTRPGのキャラクターシートにこれらの変更を反映させたい場合は[コンバーター](/converter)を使うと便利です。

　通常、キャラクター作成時の侵食度は0（未感染）になります。感染者のキャラクターを作成したい場合は、任意の値を設定することもできます。  
　**侵食度はセッションごとにリセットされず、引き継がれます。**

## 侵食度を下げる

　少なくとも1102年のテラにおいて<b>鉱石病は不治の病であり、進行を遅らせることはできても、治癒することはできません</b>。  
　ただし、侵食度が上昇してから目安1時間以内に<b>鉱石病抑制剤</b>を投与することで、 **1D5** （直前の上昇値を上限とする）だけ侵食度を下げることができます。  
　**〈＊手当て〉や〈医術〉で侵食度を下げることはできません。**

<Memo>
　ロドスの抑制剤の品質は他の追随を許しません。もし他の薬に頼るとしたら、同等の効果は期待できないでしょう。
</Memo>
