package br.com.gabrizord.gzgestao.controller;

import br.com.gabrizord.gzgestao.dto.EmployeeDTO;
import br.com.gabrizord.gzgestao.model.Employee;
import br.com.gabrizord.gzgestao.service.EmployeeService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;


import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(EmployeeRestController.class)
class EmployeeRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EmployeeService employeeService;

    @Test
    void getAllEmployees_withoutAuthentication_shouldReturn401() throws Exception {

        mockMvc.perform(get("/api/employee"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(username = "admin", roles = "ADMIN")
    void getAllEmployees_withAuthentication_shouldReturn200() throws Exception {

        mockMvc.perform(get("/api/employee"))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = "admin", authorities = "ADMIN")
    void createEmployee_withAuthentication_shouldReturn201() throws Exception {
        // Criando um objeto Employee de exemplo
        EmployeeDTO employee = new EmployeeDTO(1L, "John Doe", "Manager", "johndoe@me.com", "1111333344");

        // Converter o objeto para JSON
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(employee);

        // Configurar o Mock para retornar um objeto Employee
        when(employeeService.saveEmployee(Mockito.any(EmployeeDTO.class))).thenReturn(new Employee());

        // Realizar a requisição POST
        mockMvc.perform(post("/api/employee")
                        .contentType(MediaType.APPLICATION_JSON)
                        .with(csrf())
                        .content(json))
                .andExpect(status().isCreated());
    }

    @Test
    void createEmployee_withoutAuthentication_shouldReturn401() throws Exception {
        // Criando um objeto Employee de exemplo
        EmployeeDTO employee = new EmployeeDTO(1L, "John Doe", "Manager", "johndoe@me.com", "1111333344");

        // Converter o objeto para JSON
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(employee);

        // Realizar a requisição POST
        mockMvc.perform(post("/api/employee")
                        .contentType(MediaType.APPLICATION_JSON)
                        .with(csrf())
                        .content(json))
                .andExpect(status().isUnauthorized());
    }

}
