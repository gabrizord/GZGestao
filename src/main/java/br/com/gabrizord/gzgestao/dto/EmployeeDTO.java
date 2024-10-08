package br.com.gabrizord.gzgestao.dto;

import br.com.gabrizord.gzgestao.model.Employee;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmployeeDTO {

    private Long id;

    @NotBlank(message = "Nome é obrigatório")
    @Size(max = 50, message = "Nome não pode ter mais de 50 caracteres")
    private String name;

    @NotBlank(message = "Cargo é obrigatório")
    @Size(max = 20, message = "Cargo não pode ter mais de 20 caracteres")
    private String position;

    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email deve ser um endereço de e-mail válido")
    @Size(max = 50, message = "Email não pode ter mais de 50 caracteres")
    private String email;

    @NotBlank(message = "Telefone é obrigatório")
    @Size(max = 11, message = "Telefone não pode ter mais de 11 caracteres")
    private String phoneNumber;

    public Employee convertToEntity() {
        Employee employee = new Employee();
        employee.setName(name);
        employee.setPosition(position);
        employee.setEmail(email);
        employee.setPhoneNumber(phoneNumber);
        return employee;
    }
}
