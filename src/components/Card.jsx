import Button from "./Button";

export const Card = ({image, name, description}) => {
	return (
		<div className="max-w-sm w-full lg:max-w-full lg:flex">
			<div
				className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
				title="Woman holding a mug"
			>
				<img src={image} alt="" />
			</div>
			<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
				<div className="mb-8">
					<div className="text-gray-900 font-bold text-xl mb-2">
						{name}
					</div>
					<p className="text-gray-700 text-base">
						{description}
					</p>
				</div>
				<div className="flex items-center">
					<div className="text-sm">
						<Button></Button>
					</div>
				</div>
			</div>
		</div>
	);
};
