import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea, VStack, HStack, Tag, TagLabel, TagCloseButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaPaperclip } from "react-icons/fa";

const Index = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    participants: [],
    attachment: null,
  });

  const [participantInput, setParticipantInput] = useState("");
  const [existingParticipants, setExistingParticipants] = useState(["John Doe", "Jane Smith", "Mike Johnson"]);

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleParticipantInput = (e) => {
    setParticipantInput(e.target.value);
  };

  const handleAddParticipant = () => {
    if (participantInput.trim() !== "") {
      const newParticipant = participantInput.trim();
      setFormData({
        ...formData,
        participants: [...formData.participants, newParticipant],
      });
      setParticipantInput("");

      if (!existingParticipants.includes(newParticipant)) {
        setExistingParticipants([...existingParticipants, newParticipant]);
      }
    }
  };

  const handleRemoveParticipant = (participant) => {
    setFormData({
      ...formData,
      participants: formData.participants.filter((p) => p !== participant),
    });
  };

  const handleAttachmentChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data and attachment via email
    // TODO: Save form data to the database
    console.log(formData);
    toast({
      title: "Form submitted",
      description: "The form data has been submitted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setFormData({
      title: "",
      description: "",
      category: "",
      participants: [],
      attachment: null,
    });
  };

  return (
    <Box maxWidth="500px" margin="auto" mt={8}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea name="description" value={formData.description} onChange={handleChange} required />
          </FormControl>
          <FormControl id="category">
            <FormLabel>Category</FormLabel>
            <Select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select a category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </Select>
          </FormControl>
          <FormControl id="participants">
            <FormLabel>Participants</FormLabel>
            <HStack spacing={2}>
              <Input type="text" value={participantInput} onChange={handleParticipantInput} list="participantSuggestions" />
              <datalist id="participantSuggestions">
                {existingParticipants.map((participant) => (
                  <option key={participant} value={participant} />
                ))}
              </datalist>
              <Button leftIcon={<FaPlus />} onClick={handleAddParticipant}>
                Add
              </Button>
            </HStack>
            <HStack mt={2} spacing={2}>
              {formData.participants.map((participant) => (
                <Tag key={participant} size="md" borderRadius="full">
                  <TagLabel>{participant}</TagLabel>
                  <TagCloseButton onClick={() => handleRemoveParticipant(participant)} />
                </Tag>
              ))}
            </HStack>
          </FormControl>
          <FormControl id="attachment">
            <FormLabel>Attachment</FormLabel>
            <Input type="file" name="attachment" onChange={handleAttachmentChange} />
            {formData.attachment && (
              <HStack mt={2}>
                <FaPaperclip />
                <span>{formData.attachment.name}</span>
              </HStack>
            )}
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Index;
