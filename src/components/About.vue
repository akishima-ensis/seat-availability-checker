<template>
  <v-container>
    <div>
      <h1 class="gray--text display-1 mb-3 text-center">当サイトについて</h1>

      <v-card class="mt-3 mb-4 mx-auto" width="500">
        <v-card-text>
          当サイトはアキシマエンシスの学習室における空席情報を可視化し提供することを目的に開設された非公式のものです。
        </v-card-text>
      </v-card>

      <v-card class="mb-4 mx-auto" width="500">
        <v-card-title>
          データの取得方法について
        </v-card-title>
        <v-card-text>
          <p>当サイトは<a href="https://webreserv.library.akishima.tokyo.jp/webReserv/AreaInfo/Login">昭島市民図書館 - WEB予約</a>から1分間隔で空席情報を取得、保存しています。取得したデータは30日間保存されます。</p>
        </v-card-text>
      </v-card>

      <v-card class="mb-4 mx-auto" width="500">
        <v-card-title>
          ソースコードについて
        </v-card-title>
        <v-card-text>
          当サイトのソースコードは<a href="https://github.com/akishima-ensis/seat-availability-checker">GitHubのリポジトリ</a>にあります。
        </v-card-text>
      </v-card>

      <v-card class="mt-3 mb-4 mx-auto" width="500">
        <v-card-title>
          作者について
        </v-card-title>
        <v-card-text>
          <p>Twitter: <a href="https://twitter.com/qxi_">miya（@qxi_）</a></p>
          <p>メールアドレス: <a href="mailto:miyayanenn@gmail.com">miyayanenn@gmail.com</a></p>
        </v-card-text>
      </v-card>

      <v-card class="mb-4 mx-auto" width="500">
        <v-card-title>
          免責事項
        </v-card-title>
        <v-card-text>
          <p>当サイトに掲載されている情報の正確性については万全を期しておりますが、当サイトの管理者は利用者が当サイトを用いて行う行為について一切の責任を追うものではありません。</p>
          <p>当サイトの利用に起因した利用者の損害及び利用者が第三者に与えた損害に対して、責任を追うものではありません。</p>
          <p>当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。</p>
        </v-card-text>
      </v-card>
    </div>

  </v-container>
</template>
