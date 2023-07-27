import useSWR from 'swr';

export default function TotalUsers() {
	const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFIGLw3THQARBNhQTVJnFXcyfOATc3nLL9Z9zXlHKjlZdWSvtT8I1IcShj3x0ARK3XmcwF9OIzoVid/pub?gid=1546155644&single=true&output=tsv";

	const fetcher = (url: string) =>
		fetch(url).then((res) => res.text());
	const { data, error, isLoading } = useSWR(url, fetcher);

	if (error) {
		return ('Failed to load')
	}
	if (isLoading) {
		return ('Loading...')
	}
	if (data) {
		// 字串去除換行符號
		const dataOneline = data.replaceAll('\r\n', '\t');
		// 利用定位鍵把字串分割成陣列
		const dataArray = dataOneline.split('\t');
		const result = dataArray[(dataArray.length - 2)];
		return (result);
	}
}