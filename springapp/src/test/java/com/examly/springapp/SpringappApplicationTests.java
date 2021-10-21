package com.examly.springapp;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//import org.junit.Test;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
class SpringappApplicationTests {

	@Autowired
    private MockMvc mockMvc;
	
	@Test
	@Transactional
    public void BE_Get_Movie() throws Exception {
	 	mockMvc.perform(MockMvcRequestBuilders.get("/movie")
		.contentType(MediaType.APPLICATION_JSON)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_Get_Comments() throws Exception {
	 	mockMvc.perform(MockMvcRequestBuilders.get("/admin/comment")
		.contentType(MediaType.APPLICATION_JSON)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
		.andReturn();
    }
	
	@Test //add Trainer
    public void BE_Update_Movie() throws Exception {
        String newMovie = "{\"movieId\":\"MID001\",\"movieName\":\"BigHero6\",\"movieUrl\":\"bighero6.in\",\"moviePosterUrl\":\"bighero6poster.in\",\"movieCast\":\"amine\",\"like\":\"10likes\"}";
        mockMvc.perform(MockMvcRequestBuilders.put("/admin/movie")
		.param("movieId","MID001")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newMovie)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
	//Delete the Trainer
	@Test
    public void BE_Delete_Movie() throws Exception {
		
	 	mockMvc.perform(MockMvcRequestBuilders.delete("/admin/movie")
		.param("movieId","MID001")
		.contentType(MediaType.APPLICATION_JSON)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
}
