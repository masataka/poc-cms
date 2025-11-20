import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	text: string;
};

export default defineOperationApi<Options>({
	id: 'build-lume', // これはapp.tsで書いたものと同じものを書くきまり。
	handler: ({ text }, { data }) => {
		console.log(text); // Flowsエディタで設定したパラメータ値
		console.log(data.$trigger); // bodyプロパティにコレクションの情報が入る
	},
});
