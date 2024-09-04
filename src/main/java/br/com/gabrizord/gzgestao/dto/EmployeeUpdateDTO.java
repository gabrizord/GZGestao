package br.com.gabrizord.gzgestao.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeUpdateDTO {

    private Long id;

    @Size(max = 50, message = "Nome não pode ter mais de 50 caracteres")
    private String name;

    @Size(max = 20, message = "Cargo não pode ter mais de 20 caracteres")
    private String position;

    @Email(message = "Email deve ser um endereço de e-mail válido")
    @Size(max = 50, message = "Email não pode ter mais de 50 caracteres")
    private String email;

    @Size(max = 11, message = "Telefone não pode ter mais de 11 caracteres")
    private String phoneNumber;
}
