import Link from 'next/link';
import printDateYYYYMMDDhhmm from '@/libs/printDateYYYYMMDDhhmm';
import { TiNews } from 'react-icons/ti';

export default function PressReleasesList({ pressReleasesList, count }) {
	return (
		<div className="w-full p-1 md:p-4 lg:p-6 mx-2 md:mx-4">
			<div className="flex">
				<TiNews className="text-lg md:text-xl my-auto mr-1 md:mr-2" /><h3 className="text-base lg:text-lg">기업 뉴스</h3>
			</div>
			{pressReleasesList.majorDevelopment.slice(0, 5).map((el, index) => (
				<li key={index} className="list-none">
					<Link href={el.url} target='_blank' rel='noopener noreferrer' >
						<span className="text-xs italic">{printDateYYYYMMDDhhmm(el.datetime)}</span>
						<h4 className="text-base">{el.headline}</h4>
						<hr />
					</Link>
				</li>
			))}
			</div>
	)
}
