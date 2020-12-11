//Core
import React, { useState } from 'react';
//Styles
import { StyledWrap, StyledButton, StyledSpan } from './SearchBar.styles';
import { StyledForm, StyledInput } from './SearchBar.styles';

type SearchFormProps = {
	onSubmit: (args: string) => void;
};

const SearchForm = ({ onSubmit }: SearchFormProps) => {
	const [value, setValue] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const {
			target: { value },
		} = e;

		setValue(value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		onSubmit(value);
		setValue('');
	};

	return (
		<StyledWrap>
			<StyledForm onSubmit={handleSubmit}>
				<StyledInput
					required
					type="text"
					value={value}
					autoComplete="off"
					placeholder="Search..."
					onChange={handleChange}
				/>

				<StyledButton type="submit">
					<StyledSpan>Search</StyledSpan>
				</StyledButton>
			</StyledForm>
		</StyledWrap>
	);
};

export default SearchForm;
