<template>
  <v-container>
    <v-card class="mb-4 mx-auto" width="500">
      <v-card-title>
        当サイトについて
      </v-card-title>
      <v-card-text>
        当サイトはアキシマエンシス（昭島市教育福祉総合センター）の学習室における1日分の空席状況を可視化したものです。昭島市民の有志が開設したもので非公式となっています。<br><br>
        <a @click="$router.push('/')">ページトップへ</a>
      </v-card-text>
    </v-card>

    <v-card class="mt-3 mb-4 mx-auto" width="500">
      <v-card-title>
        作者について
      </v-card-title>
      <v-card-text>
        <v-icon small>mdi-github</v-icon> : <a href="https://github.com/miya">miya</a><br>
        <v-icon small>mdi-twitter</v-icon> : <a href="https://twitter.com/qxi_">miya（@qxi_）</a><br>
        <v-icon small>mdi-email</v-icon> : <a href="mailto:miyayanenn@gmail.com">miyayanenn@gmail.com</a>
      </v-card-text>
    </v-card>

    <v-card class="mb-4 mx-auto" width="500">
      <v-card-title>
        データの取得について
      </v-card-title>
      <v-card-text>
        当サイトが利用している空席状況のデータは<a href="https://webreserv.library.akishima.tokyo.jp/webReserv/AreaInfo/Login">昭島市民図書館 - WEB予約</a>からプログラムを用いて1分ごとに自動的に取得したものです。取得したデータは30日間保存されます。
      </v-card-text>
    </v-card>

    <v-card class="mb-4 mx-auto" width="500">
      <v-card-title>
        ソースコードについて
      </v-card-title>
      <v-card-text>
        当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。詳しくは<a href="https://github.com/akishima-ensis/seat-availability-checker">GitHubリポジトリ</a>にあります。
      </v-card-text>
    </v-card>

    <v-card class="mt-3 mb-4 mx-auto" width="500">
      <v-card-title>
        当サイトに使われている画像について
      </v-card-title>
      <v-card-text>
        当サイトに使われているファビコンは<a href="https://rakugakiicon.com/">落書きアイコン</a>様からお借りしたフリー画像です。かわいい。
      </v-card-text>
    </v-card>

    <v-card class="mb-4 mx-auto" width="500">
      <v-card-title>
        Google Analyticsの利用について
      </v-card-title>
      <v-card-text>
        当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析ツールであるGoogle Analyticsを利用した計測を行なっています。<br><br>
        Google Analyticsでは当サイトが発行するクッキー（Cookie）等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。<br><br>
        Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。<br><br>
        <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">・Google アナリティクス利用規約</a><br>
        <a href="https://policies.google.com/privacy?hl=ja">・Google プライバシーポリシー</a><br>
        <a href="https://support.google.com/analytics/answer/6004245?hl=ja">・Google Analyticsについての詳細情報</a>
      </v-card-text>
    </v-card>

    <v-card class="mb-4 mx-auto" width="500">
      <v-card-title>
        免責事項
      </v-card-title>
      <v-card-text>
        当サイトに掲載されている情報の正確性については万全を期しておりますが、当サイトの管理者は利用者が当サイトを用いて行う行為について一切の責任を追うものではありません。<br><br>
        当サイトの利用に起因した利用者の損害及び利用者が第三者に与えた損害に対して、責任を追うものではありません。<br><br>
        当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。
      </v-card-text>
    </v-card>
  </v-container>
</template>
