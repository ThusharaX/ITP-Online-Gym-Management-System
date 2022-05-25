import React from "react";
import { Skeleton } from "@mantine/core";

const WorkoutProgramSkeleton = ({ isLoading }) => {
	const loopCount = isLoading ? 8 : 0;
	return (
		<>
			{Array.from({ length: loopCount }).map((_, index) => (
				<div key={index} style={{ width: 340, margin: "auto", backgroundColor: "#969595", borderRadius: 5 }}>
					<div style={{ padding: "10px" }}>
						<Skeleton visible={isLoading} height={160} radius="sm" />
						<Skeleton visible={isLoading} height={15} mt="lg" radius="xl" width="70%" />
						<Skeleton visible={isLoading} height={10} mt="sm" radius="xl" />
						<Skeleton visible={isLoading} height={10} mt="sm" radius="xl" />
						<Skeleton visible={isLoading} height={10} mt="sm" radius="xl" width="30%" />
						<Skeleton visible={isLoading} height={3} mt="sm" radius="xl" />
						<Skeleton visible={isLoading} height={10} mt="sm" radius="xl" width="50%" />
						<Skeleton visible={isLoading} height={10} mt="sm" radius="xl" width="20%" />
						<Skeleton visible={isLoading} height={10} mt="sm" radius="xl" width="40%" />
						<Skeleton visible={isLoading} height={35} mt="lg" ml="md" mr="md" radius="sm" width="90%" />
					</div>
				</div>
			))}
		</>
	);
};

export default WorkoutProgramSkeleton;
