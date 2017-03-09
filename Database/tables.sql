-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `address` VARCHAR(255) NULL,
  `date_of_birth` DATE NULL,
  `token` VARCHAR(255) NOT NULL,
  `gender` TINYINT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `token_UNIQUE` (`token` ASC),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`vendor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `user_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_vendor_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_vendor_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`product` (
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `id` INT NOT NULL AUTO_INCREMENT,
  `vendor_id` INT NOT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_product_vendor2_idx` (`vendor_id` ASC),
  CONSTRAINT `fk_product_vendor2`
    FOREIGN KEY (`vendor_id`)
    REFERENCES `mydb`.`vendor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`item` (
  `size` INT NULL,
  `stock` INT NOT NULL,
  `colour` VARCHAR(255) NULL,
  `price` DOUBLE NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `product_id` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `product_id`),
  INDEX `fk_item_product1_idx` (`product_id` ASC),
  CONSTRAINT `fk_item_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `mydb`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`message`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`message` (
  `text` LONGTEXT NOT NULL,
  `state` INT NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `id` INT NOT NULL AUTO_INCREMENT,
  `sender_id` INT NOT NULL,
  `receiver_id` INT NOT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `sender_id`, `receiver_id`),
  INDEX `fk_message_user1_idx` (`sender_id` ASC),
  INDEX `fk_message_user2_idx` (`receiver_id` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  CONSTRAINT `fk_message_user1`
    FOREIGN KEY (`sender_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_message_user2`
    FOREIGN KEY (`receiver_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`banking_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`banking_info` (
  `card_number` VARCHAR(255) NOT NULL,
  `card_holder` VARCHAR(255) NOT NULL,
  `provider` VARCHAR(255) NOT NULL,
  `type` INT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_banking_info_user1_idx` (`user_id` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  CONSTRAINT `fk_banking_info_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `delivery_status` INT NOT NULL DEFAULT 1,
  `payment_status` INT NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  `banking_info_id` INT NOT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_order_banking_info1_idx` (`banking_info_id` ASC),
  CONSTRAINT `fk_order_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_banking_info1`
    FOREIGN KEY (`banking_info_id`)
    REFERENCES `mydb`.`banking_info` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`image` (
  `file` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `id` INT NOT NULL AUTO_INCREMENT,
  `item_id` INT NULL,
  `item_product_id` INT NULL,
  `user_id` INT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE INDEX `file_path_UNIQUE` (`file` ASC),
  PRIMARY KEY (`id`),
  INDEX `fk_image_item1_idx` (`item_id` ASC, `item_product_id` ASC),
  INDEX `fk_image_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_image_item1`
    FOREIGN KEY (`item_id` , `item_product_id`)
    REFERENCES `mydb`.`item` (`id` , `product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_image_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`rating`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`rating` (
  `value` INT NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `review` LONGTEXT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_rating_user1_idx` (`user_id` ASC),
  INDEX `fk_rating_product1_idx` (`product_id` ASC),
  CONSTRAINT `fk_rating_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_rating_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `mydb`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`department`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`department` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` LONGTEXT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`product_has_department`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`product_has_department` (
  `product_id` INT NOT NULL,
  `department_id` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`, `department_id`),
  INDEX `fk_product_has_department_department1_idx` (`department_id` ASC),
  INDEX `fk_product_has_department_product1_idx` (`product_id` ASC),
  CONSTRAINT `fk_product_has_department_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `mydb`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_department_department1`
    FOREIGN KEY (`department_id`)
    REFERENCES `mydb`.`department` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`user_has_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_has_item` (
  `user_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  `item_product_id` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `fk_user_has_item_item1_idx` (`item_id` ASC, `item_product_id` ASC),
  INDEX `fk_user_has_item_user1_idx` (`user_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_has_item_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_item_item1`
    FOREIGN KEY (`item_id` , `item_product_id`)
    REFERENCES `mydb`.`item` (`id` , `product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`order_has_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`order_has_item` (
  `order_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  `item_product_id` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `count` INT NULL DEFAULT 1,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_order_has_item_item1_idx` (`item_id` ASC, `item_product_id` ASC),
  INDEX `fk_order_has_item_order1_idx` (`order_id` ASC),
  CONSTRAINT `fk_order_has_item_order1`
    FOREIGN KEY (`order_id`)
    REFERENCES `mydb`.`order` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_has_item_item1`
    FOREIGN KEY (`item_id` , `item_product_id`)
    REFERENCES `mydb`.`item` (`id` , `product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
