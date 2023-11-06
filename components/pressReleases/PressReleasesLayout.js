import { getPressReleasesList } from '@/libs/finnhub/getNewsList';
import PressReleasesList from '@/components/pressReleases/PressReleasesList';

export default async function PressReleasesLayout({ ticker }) {
	let data = [];
	try {
		data = await getPressReleasesList(ticker);
	} catch (error) {
		console.error('Error Fetching Press Releases Data', error);
	}

	return (
		<PressReleasesList pressReleasesList={data} count={5} />
	)
}
