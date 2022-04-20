import React, { useContext } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
const { Search: Ss } = require("tabler-icons-react");
import EventContext from "../../contexts/EventContext";
import EventAPI from "../../contexts/api/EventAPI";

function Search() {
	const { setEvents } = useContext(EventContext);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const handleSearch = (values) => {
		EventAPI.searchEvent(values.search).then((response) => {
			// eslint-disable-next-line no-console
			console.log(response.data);
			setEvents(response.data);
		});
	};

	const handleResetSearch = () => {
		form.reset();
		EventAPI.getEventData().then((response) => {
			setEvents(response.data);
		});
	};

	return (
		<Box sx={{ maxWidth: 300, opacity: 0.8, paddingTop: "10px" }} mx="auto">
			<form onSubmit={form.onSubmit((values) => handleSearch(values))}>
				<TextInput
					sx={{ border: "2px solid #557", borderRadius: "6px" }}
					required
					placeholder="Search events..."
					icon={<Ss size={14} />}
					{...form.getInputProps("search")}
				/>

				<Group position="right" mt="md">
					<Button type="reset" onClick={handleResetSearch}>
						Reset
					</Button>
				</Group>
			</form>
		</Box>
	);
}

export default Search;
