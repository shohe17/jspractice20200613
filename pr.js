
// console.log("hello world");
// console.log("文字列ばダブルクォーテーションで囲む");

// console.log(5 + 1);
// console.log("数値を計算する場合はダブルクォーテーションで囲まない")

// console.log("5 + 1");
// console.log("ダブルクォーテーションで囲む場合、文字列として表示される");
// // 8と4をかけた結果を出力してください
// console.log(8 * 4);
// // 24を4で割った結果を出力してください
// console.log(24 / 4);
// // 7を2で割った余りを出力してください
// console.log(7 % 2);
// // 「ひつじ」と「仙人」を連結してコンソールに出力してください
// console.log("ひつじ" + "仙人");
// // 文字列の「20」と「15」を連結してコンソールに出力してください
// console.log("20" + "15");
// // 文字列を足したい場合
// console.log("たこ" + "たこ")　=　たこたこになる


// console.log("変数は「let or const 変数名 = 値」として定義。プログラミングの「=」は「右辺を左辺に代入する")
// console.log("letの場合、再び代入すると数値が更新される（constはされない）")
// console.log("計算省略方法、2 = 1 + 1と表すが、 1 += 1;と省略できる")
// // 変数nameを定義し、「にんじゃわんこ」を代入してください
// let name ="にんじゃわんこ";
// // 変数nameの値を出力してください
// console.log(name);
// // 変数lengthを定義してください
// let length ="5";
// // 変数lengthの値を出力してください
// console.log(length);
// // 変数lengthを用いて、円の面積を出力してください
// console.log(length * length * 3);
// // 変数nameの値を"とりずきん"に更新してください
// name ="とりずきん";
// // 変数nameの値を出力してください
// console.log(name);
// // 変数numberの値に3を加えてください
// number += 3;
// // 変数numberの値を2で割ってください
// number /= 2;


// console.log("定数を扱う場合、const = 変数をダブルクォーテーションで囲む")
// // 定数languageを定義してください
// const language ="フランス語";
// // 定数languageの値を出力してください
// console.log(language);
// // 定数languageを用いて、「〇〇を話せます」と出力してください
// console.log(language + "を話せます");


// console.log("テンプレートリテラルを用いた連結方法は、バッククォーテーション、${}を使います")
// // 「ぼくの名前は〇〇です」とコンソールに出力してください
// console.log(`僕の名前は${name}です`);
// // 「今は〇〇歳です」と出力してください
// console.log(`今は${age}歳です`);


// 条件分岐
// console.log("if文の書き方例")　{
//   const number = 5;
//   if(number >= 5){
//     console.log("5より大きい数字です");
// }
// }　
// const level = 12;
// // 条件式を「level > 10」とするif文を作ってください
// if (level > 10); {
//   console.log("レベルが10より大きいです");
// }

// console.log("真偽値は、trueとfaultの2種類で、条件を満たせばtrue、満たせなければfaultになる")
// const age = 24;
// // 「age >= 20」を出力してください 
//   console.log(age >= 24);
//   // 「age < 20」を出力してください
//   console.log(age < 20);
//   // ageの値が20以上の場合に、「私は20歳以上です」と出力してください
//   if (age >= 20); {
//     console.log("私は20歳以上です");
// }

// console.log("比較演算子は、左と右が等しいから調べます。等しいは1 === 1、等しくないは1 !== 1")
// const password = "ninjawanko";
// // passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
// if (password === "ninjawanko"){
//   console.log("ログインに成功しました");
// }
// // passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
// if (password !== "ninjawanko") {
//   console.log("パスワードが間違っています");
// }

// console.log("else if文は、もし〇〇なら●●を行う、そうでなければ■■を行う」という処理ができるようになります")
// const age = 17;
// // 条件式が成り立たない場合に「私は20歳未満です」と出力してください
// if (age >= 20){
//   console.log("私は20歳以上です")
//   else {
//     console.log("私は20歳未満です")
//   }
// }
// const age = 17;
// // ageの値が10以上20未満のとき、「私は20歳未満ですが、10歳以上です」と出力してください
// if (age >= 20){
//   console.log("私は20歳以上です");
// }else if (age >= 10){
//   console.log("私は20歳未満ですが、10歳以上です");
// }else (age <= 9){
//   console.log("私は10歳未満です");
// }

// const age = 24;
// // 指定された条件のif文を作成してください
// if (age >= 20 && age < 30) {
//   console.log("私は20代です");
// }

// console.log("switch文は、switch(条件の値){ 処理（case"赤":） }を分けて処理を分岐させる。終わりにはbreakが不可欠")
// const rank = 2;
// switch (rank) {
//   case 1:
//     console.log("金メダルです！");
//     break;
//   // rankの値が2のcaseを追加してください
//   case 2:
//     console.log("銀メダルです！");
//     break;
//   // rankの値が3のcaseを追加してください
//   case 3:
//     console.log("銅メダルです！");
//     break;
// }

// console.log("for文は同じ文をくりかえす性質がある")



// document.getElementById("text-button").onclick = function() {
//   document.getElementById("text").innerHTML = "クリックされた！";
// };

// document.getElementById("square-button").onclick = function() {
//   this.classList.toggle("blue");
// };

alert("Omutsu")

document.getElementById("text-button").onclick = function() {
  document.getElementById("text").innerHTML = "クリックされた！";
};

// function clickTest() {
//   target = document.getElementById("anime_test");
//   if (target.className == null || target.className=="") {
//     target.className = "active";
//   } else {
//     target.className = "";
//   }
// }